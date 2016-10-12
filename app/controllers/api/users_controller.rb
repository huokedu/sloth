class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    avatar = Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
    @user.avatar ||= avatar

    if @user.save
      login!(@user)
      @user.subscribed_channels << Channel.first

      sb = User.first
      slothbot = Channel.create(
        creator_id: sb.id,
        name: [@user.username, 'slothbot'].sort.join(","),
        direct: true
      )
      sb.subscribed_channels << slothbot
      @user.subscribed_channels << slothbot

      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.where('id != ?', current_user.id)
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :avatar)
  end
end
