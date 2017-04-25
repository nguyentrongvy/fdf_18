class User < ApplicationRecord
  before_save :email_downcase

  has_many :comments
  has_many :orders
  has_many :ratings
  validates :name, presence: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true,
    format: {with: VALID_EMAIL_REGEX}, uniqueness: {case_sensitive: false}
  validates :password, presence: true, allow_blank: true
  validates :address, :phone, presence: true
  has_secure_password

  class << self
    def digest string
      cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
        BCrypt::Engine.cost
      BCrypt::Password.create string, cost: cost
    end
  end

  def is_user? user
    self == user
  end

  private

  def email_downcase
    email.downcase!
  end
end
