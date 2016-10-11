# == Schema Information
#
# Table name: notifications
#
#  id         :integer          not null, primary key
#  message_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notification < ActiveRecord::Base
  belongs_to :message
  belongs_to :user

  validates :user, :message, presence: true
  validates_uniqueness_of :user, scope: :message
end
