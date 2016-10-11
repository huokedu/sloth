json.id user.id
json.username user.username
json.avatar_url asset_path(user.avatar.url)

json.subscribed_channels user.subscribed_channels.where(direct: false) do |channel|
  json.id channel.id
  json.name channel.name
  json.purpose channel.purpose
end

json.direct_messages user.subscribed_channels.where(direct: true) do |channel|
  json.id channel.id
  json.name (channel.name.split(',').reject {|name| name === current_user.username}).join(', ')
  json.purpose channel.purpose
  json.direct channel.direct
  json.numMembers channel.members.length
end
