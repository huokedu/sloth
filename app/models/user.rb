# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :email, :session_token,
    presence: true, uniqueness: true

  validates :password_digest, presence: true

  validates :password, length: { minimum: true, allow_nil: true }

  attr_reader :password

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = find_by_username(username)

    if user && user.password_matches?(password)
      user
    else
      nil
    end
  end

  def password_matches?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private
  def ensure_unique_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
