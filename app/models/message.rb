# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  edited     :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ActiveRecord::Base
  belongs_to :channel
  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id
  has_many :notifications

  validates :body, :author, :channel, presence: true
end
