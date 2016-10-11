class Api::NotificationsController < ApplicationController
  def destroy
    @notifications = Notification.where(user_id: current_user.id)
      .joins(:channel).where(channels: {id: params[:id]}).references(:channels)

    @notifications.destroy_all if @notifications

    render json: {}
  end
end
