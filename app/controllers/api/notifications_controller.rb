class Api::NotificationsController < ApplicationController
  def destroy
    @notifications = Notification.where({
      user_id: current_user.id,
      channel_id: params[:id]
    })

    @notifications.destroy_all if @notifications
  end
end
