#########
# Users #
#########
User.destroy_all

slothbot = User.create!(
  username: 'slothbot',
  email: 'tree@dude.com',
  password: 'slothisthebestapp.com',
  avatar: File.open(Rails.root.join('app', 'assets', 'images', 'slothbot.jpg'))
)

alleycat = User.create!(
  username: 'alleycat',
  email: 'a@b.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

stapler = User.create!(
  username: 'stapler',
  email: 'secure@paper.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

phone = User.create!(
  username: 'phone',
  email: 'phone@att.net',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

orpheus = User.create!(
  username: 'orpheus',
  email: 'iam@thecat.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

############
# Channels #
############
Channel.destroy_all

general = Channel.create!(name: 'general', creator_id: slothbot.id)
random = Channel.create!(name: 'random', creator_id: slothbot.id)
app_academy = Channel.create!(name: 'app-academy', creator_id: alleycat.id)

###############
# Memberships #
###############
ChannelMembership.destroy_all

[slothbot, alleycat, stapler, phone, orpheus].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: general.id)
end

[stapler, phone].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: random.id)
end


[alleycat, orpheus].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: app_academy.id)
end
