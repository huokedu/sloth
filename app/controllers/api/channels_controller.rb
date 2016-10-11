class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.includes(:members).all
  end

  def subscriptions
    @subscribed_channels = current_user.subscribed_channels;
    render :subscribed_channels
  end

  def show
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.creator_id = current_user.id

    if @channel.save
      @channel.members << current_user
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def create_direct_message
    @channel = Channel.new(channel_params)
    @channel.creator_id = current_user.id

    if @channel.save
      params[:members].each do |member|
        @channel.members << User.find_by_id(member)
      end
      @channel.members << current_user

      @subscribed_channels = current_user.subscribed_channels
      render :subscribed_channels
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def subscribe
    @channel = Channel.find(params[:id])
    @channel.members << current_user

    @subscribed_channels = current_user.subscribed_channels
    render :subscribed_channels
  end

  def unsubscribe
    @channel = Channel.find(params[:id])
    @channel.members.delete(current_user)

    @subscribed_channels = current_user.subscribed_channels
    render :subscribed_channels
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :purpose, :direct)
  end
end
