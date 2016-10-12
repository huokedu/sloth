# == Schema Information
#
# Table name: messages
#
#  id                 :integer          not null, primary key
#  body               :text             not null
#  author_id          :integer          not null
#  channel_id         :integer          not null
#  edited             :boolean          default(FALSE)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Message < ActiveRecord::Base
  belongs_to :channel
  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id
  has_many :notifications
  has_attached_file :image, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  validates :body, :author, :channel, presence: true
end
