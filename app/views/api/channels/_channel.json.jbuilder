json.set! channel.id do
  json.id channel.id
  json.name channel.name
  json.purpose channel.purpose
  json.members channel.members.map do |member|
    json.id member.id
    json.username member.username
  end
end
