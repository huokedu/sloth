User.destroy_all

alex = User.create!(username: 'albronca', email: 'a@b.com', password: 'starwars')
sid = User.create!(username: 'sid', email: 'ice@age.com', password: 'starwars')
buttercup = User.create!(username: 'buttercup', email: 'butter@cup.net', password: 'starwars')
pizza = User.create!(username: 'pizza', email: 'papajohn@dominos.com', password: 'pepperoni')

Channel.destroy_all

general = Channel.create!(name: 'general', purpose: 'Discuss the mundane', creator_id: alex.id)
random = Channel.create!(name: 'random', purpose: 'I thought hurricane season was over!', creator_id: pizza.id)
foliage = Channel.create!(name: 'foliage', purpose: 'yum food stuff', creator_id: buttercup.id)

ChannelMembership.destroy_all

[alex, buttercup, pizza].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: general.id)
end

[alex, pizza].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: random.id)
end


[sid, buttercup].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: foliage.id)
end
