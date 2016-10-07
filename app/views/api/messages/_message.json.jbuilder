json.set! message.id do
  json.id message.id
  json.channelId message.channel_id
  json.body message.body
  json.created_at message.created_at.strftime("%l:%M %p")
  json.author message.author
end
