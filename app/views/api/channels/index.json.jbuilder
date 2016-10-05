json.array! @channels do |channel|
  json.id channel.id
  json.name channel.name
  json.purpose channel.purpose
  json.creator_id channel.creator_id
end
