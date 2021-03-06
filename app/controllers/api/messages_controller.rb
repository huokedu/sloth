class Api::MessagesController < ApplicationController
  def index
    @channel_id = params[:channel_id]
    @messages = Message.where(channel_id: @channel_id)
  end

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id
    @message.channel_id = params[:channel_id]

    if @message.save
      channel = @message.channel
      ensure_all_members(channel) if channel.direct

      other_members = @message.channel.members
        .where('users.id != ?', current_user.id)

      other_members.each do |member|
        Notification.create(user_id: member.id, message_id: @message.id)
      end

      Pusher.trigger(
        "sloth",
        'new_message',
        {
          channelId: @message.channel_id,
          message: {
            id: @message.id,
            body: @message.body,
            image_url: @message.image.url,
            edited: @message.edited,
            created_at: @message.created_at.localtime.strftime("%l:%M %p"),
            channelId: @message.channel_id,
            author: {
              id: current_user.id,
              avatar_url: current_user.avatar.url,
              username: current_user.username
            }
          }.to_json
        }
      )

      slothbot(@message);

      render json: {}
    else
      render json: @message.errors.full_messages
    end
  end

  def update
    @message = Message.find(params[:id])

    if @message.update(message_params)
      @message.edited = true
      @message.save

      Pusher.trigger(
        "sloth",
        'new_message',
        {
          channelId: @message.channel_id,
          message: {
            id: @message.id,
            body: @message.body,
            image_url: @message.image.url,
            edited: @message.edited,
            created_at: @message.created_at.localtime.strftime("%l:%M %p"),
            channelId: @message.channel_id,
            author: {
              id: current_user.id,
              avatar_url: current_user.avatar.url,
              username: current_user.username
            }
          }.to_json
        }
      )

      render :show
    else
      render json: @message.errors.full_messages
    end
  end

  def destroy
    @message = Message.find(params[:id])

    if @message.destroy
      render json: {}
    else
      render json: ["Message not found"], status: 404
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :image)
  end

  def ensure_all_members(channel)
    usernames = channel.name.split(',')
    member_usernames = channel.members.map(&:username)
    usernames.each do |username|
      unless member_usernames.include?(username)
        channel.members << User.find_by_username(username)
      end
    end
  end
end
