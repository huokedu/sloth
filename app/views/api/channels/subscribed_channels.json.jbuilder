json.array! @subscribed_channels do |channel|
  json.id channel.id
  if channel.direct
    json.name (channel.name.split(',').reject {|name| name === current_user.username}).join(', ')
  else
    json.name channel.name
  end

  json.purpose channel.purpose
  json.direct channel.direct
  json.members channel.members
  json.numMembers channel.members.length
end
