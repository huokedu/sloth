json.set! message.id do
  json.id message.id
  json.channelId message.channel_id
  json.body message.body
  json.edited message.edited
  json.created_at message.created_at.localtime.strftime("%l:%M %p")
  json.author do
    json.partial! 'api/users/user.json.jbuilder', user: message.author
  end
end
