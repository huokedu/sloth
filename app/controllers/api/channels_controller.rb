class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.joins(:members).where('users.id = ?', current_user.id)
  end

  def show
  end
end
