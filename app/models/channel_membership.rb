# == Schema Information
#
# Table name: channel_memberships
#
#  id         :integer          not null, primary key
#  member_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMembership < ActiveRecord::Base
  belongs_to :channel
  belongs_to :member,
    class_name: 'User'

  validates :member, :channel, presence: true
  validates_uniqueness_of :member, scope: :channel
end
