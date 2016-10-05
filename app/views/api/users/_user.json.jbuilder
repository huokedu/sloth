json.extract! user, :id, :username
json.subscribed_channels user.subscribed_channels do |channel|
  json.id channel.id
  json.name channel.name
end
