json.set! channel.id do
  json.id channel.id
  if channel.direct
    json.name (channel.name.split(',').reject {|name| name === current_user.username}).join(', ')
  else
    json.name channel.name
  end
  json.purpose channel.purpose
  json.creator channel.creator
  json.direct channel.direct
  json.created_at channel.created_at.to_date
  json.members channel.members.map do |member|
    json.id member.id
    json.username member.username
  end
  json.numMembers channel.members.length
  json.notifications channel.notifications.where(user_id: current_user.id).length
end
