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

potato = User.create!(
  username: 'potato',
  email: 'potato@att.net',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

aglet = User.create!(
  username: 'aglet',
  email: 'shoelace@part.org',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

fern = User.create!(
  username: 'fern',
  email: 'iam@aplant.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

brad = User.create(
  username: 'brad',
  email: 'brad@gmail.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

the_man = User.create(
  username: 'the-man',
  email: 'man@human.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

monocle = User.create(
  username: 'monocle',
  email: 'one@glass.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

orpheus = User.create!(
  username: 'orpheus',
  email: 'iam@thecat.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

pneuma = User.create!(
  username: 'pneuma',
  email: 'pneuma@cat.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

cob = User.create!(
  username: 'cob',
  email: 'corn@cob.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

capstone = User.create!(
  username: 'capstone',
  email: 'cap@stone.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

dat_boi = User.create!(
  username: 'dat_boi',
  email: 'd@b.com',
  password: 'starwars',
  avatar: 'https://t0.rbxcdn.com/e8c60085ffbddb91ee0ab10efa56b913'
)

sennacy = User.create!(
  username: 'sennacy',
  email: 'sennacy@sennacycat.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

markov = User.create!(
  username: 'markov',
  email: 'markov@ned.com',
  password: 'starwars',
  avatar: Faker::Avatar.image(('a'..'z').to_a.sample(12).join)
)

curie = User.create!(
  username: 'curie',
  email: 'curie@ned.com',
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
food = Channel.create!(name: 'food', purpose: 'yum yum', creator_id: alleycat.id)
music = Channel.create!(name: 'music', purpose: 'yesterday and today\'s hits', creator_id: alleycat.id)
memes = Channel.create!(name: 'memes', purpose: 'top kek', creator_id: dat_boi.id)
nyc_subway = Channel.create!(name: 'nyc-subway', purpose: 'post your fav trains', creator_id: brad.id)

###############
# Memberships #
###############
ChannelMembership.destroy_all

all_users = [
  slothbot, alleycat, stapler, phone, potato, aglet, fern, brad, the_man,
  monocle, orpheus, pneuma, cob, capstone, dat_boi, sennacy, markov, curie
]

all_users.each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: general.id)
  ChannelMembership.create!(member_id: user.id, channel_id: random.id)
  ChannelMembership.create!(member_id: user.id, channel_id: app_academy.id)
end

[brad, phone, stapler].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: nyc_subway.id)
end

[alleycat, orpheus, potato, fern, pneuma, sennacy, markov, curie].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: food.id)
end

[alleycat, phone, the_man, monocle, pneuma, capstone, dat_boi].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: music.id)
end

[alleycat, capstone, dat_boi, aglet, potato].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: memes.id)
end

############
# Slothbot #
############

all_users.drop(1).each do |user|
  name = [user.username, 'slothbot'].sort.join(',')
  channel = Channel.create!(name: name, creator_id: slothbot.id, direct: true)
  channel.members << user
  channel.members << slothbot
end

###################
# Direct Messages #
###################

three = Channel.create!(
  name: ['phone', 'potato', 'capstone'].sort.join(','),
  creator_id: capstone.id,
  direct: true
)

three.members << phone
three.members << potato
three.members << capstone

a = Channel.create!(
  name: ['alleycat', 'capstone'].sort.join(','),
  creator_id: capstone.id,
  direct: true
)

a.members << alleycat
a.members << capstone

s = Channel.create!(
  name: ['stapler', 'capstone'].sort.join(','),
  creator_id: capstone.id,
  direct: true
)

s.members << stapler
s.members << capstone

cats = Channel.create!(
  name: ['sennacy', 'markov', 'curie', 'orpheus', 'pneuma'].sort.join(','),
  creator_id: capstone.id,
  direct: true
)

cats.members << sennacy
cats.members << markov
cats.members << curie
cats.members << orpheus
cats.members << pneuma
