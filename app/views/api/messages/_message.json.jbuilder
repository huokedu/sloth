json.set! message.id do
  json.id message.id
  json.channelId message.channel_id
  json.body message.body
  json.created_at message.created_at
  json.author message.author
end
