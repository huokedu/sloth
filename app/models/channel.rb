# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  purpose    :text
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  direct     :boolean          default(FALSE)
#

class Channel < ActiveRecord::Base
  belongs_to :creator,
    class_name: 'User'
  has_many :channel_memberships
  has_many :members,
    through: :channel_memberships,
    source: :member

  validates :name, presence: true, uniqueness: true
  validates :creator, presence: true
end
