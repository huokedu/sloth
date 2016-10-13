json.set! @channel_id do
  @messages.includes(:author).each do |message|
    json.partial! 'api/messages/message', message: message
  end
end
