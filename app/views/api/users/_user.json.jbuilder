json.extract! user, :id, :username
json.subscribed_channels user.subscribed_channels.where(direct: false) do |channel|
  json.id channel.id
  json.name channel.name
  json.purpose channel.purpose
end

json.direct_messages user.subscribed_channels.where(direct: true) do |channel|
  json.id channel.id
  json.name channel.name
  json.purpose channel.purpose
end
