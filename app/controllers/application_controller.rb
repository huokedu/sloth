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
        message = Message.create(
          author_id: slothbot.id,
          channel_id: message.channel_id,
          body: Faker::Hacker.say_something_smart
        )
        push_message(message, slothbot)
      end
    else
      if ['hey', 'hi', 'hello', 'yo', 'sup'].include?(message.body)
        slothbot = User.find_by_username('slothbot')
        message = Message.create(
          author_id: slothbot.id,
          channel_id: message.channel_id,
          body: 'hello, human'
        )
        push_message(message, slothbot)
      elsif ['test', 'testing'].include?(message.body)
        slothbot = User.find_by_username('slothbot')
        message = Message.create(
          author_id: slothbot.id,
          channel_id: message.channel_id,
          body: 'I assure you, everything is working just fine'
        )
        push_message(message, slothbot)
      elsif message.body === 'slothbot'
        slothbot = User.find_by_username('slothbot')
        message = Message.create(
          author_id: slothbot.id,
          channel_id: message.channel_id,
          body: 'yes, human?'
        )
        push_message(message, slothbot)
      elsif message.body =~ /slothbot/
        slothbot = User.find_by_username('slothbot')
        message = Message.create(
          author_id: slothbot.id,
          channel_id: message.channel_id,
          body: 'say his name and he shall appear'
        )
        push_message(message, slothbot)
      end
    end
  end

  private
  def push_message(message, author)
    Pusher.trigger(
      "sloth",
      'new_message',
      {
        channelId: message.channel_id,
        message: {
          id: message.id,
          body: message.body,
          edited: false,
          created_at: message.created_at.localtime.strftime("%l:%M %p"),
          channelId: message.channel_id,
          image_url: message.image.url,
          author: {
            id: author.id,
            avatar_url: author.avatar.url,
            username: author.username
          }
        }.to_json
      }
    )
  end
end
