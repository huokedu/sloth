class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
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
      render json: @channel.errors.full_messages
    end
  end

  def subscribe
    @channel = Channel.params(:id)
    @channel.members << current_user
  end

  def unsubscribe
    @channel = Channel.params(:id)
    @channel.members
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :purpose)
  end
end
