class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    if logged_in?
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil
    end
  end

  def slothbot(message)
    if message.channel.direct
      if message.channel.name =~ /slothbot/
        slothbot = User.find_by_username('slothbot')
        Message.create(
          author_id: slothbot.id,
          channel_id: message.channel_id,
          body: Faker::Hacker.say_something_smart
        )
      end
    else
      if ['hey', 'hi', 'hello', 'yo', 'sup'].include?(message.body)
        slothbot = User.find_by_username('slothbot')
        Message.create(
          author_id: slothbot.id,
          channel_id: message.channel_id,
          body: 'hello, human'
        )
      elsif ['test', 'testing'].include?(message.body)
        slothbot = User.find_by_username('slothbot')
        Message.create(
          author_id: slothbot.id,
          channel_id: message.channel_id,
          body: 'I assure you, everything is working just fine'
        )
      elsif message.body === 'slothbot'
        slothbot = User.find_by_username('slothbot')
        Message.create(
          author_id: slothbot.id,
          channel_id: message.channel_id,
          body: 'yes, human?'
        )
      elsif message.body =~ /slothbot/
        slothbot = User.find_by_username('slothbot')
        Message.create(
          author_id: slothbot.id,
          channel_id: message.channel_id,
          body: 'say his name and he shall appear'
        )
      end
    end
  end
end
