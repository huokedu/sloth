json.set! message.id do
  json.id message.id
  json.channelId message.channel_id
  json.body message.body
  json.edited message.edited
  json.image_url asset_path(message.image.url)
  json.created_at message.created_at.localtime.strftime("%l:%M %p")

  author = message.author
  json.author do
    json.id author.id
    json.username author.username
    json.avatar_url asset_path(author.avatar.url)
  end
end
