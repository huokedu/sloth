json.array! @subscribed_channels do |channel|
  json.id channel.id
  json.name channel.name
  json.purpose channel.purpose
end
