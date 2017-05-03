class Product < ApplicationRecord
  belongs_to :category
  has_many :line_items
  has_many :comments
  has_many :ratings
  has_many :product_images, dependent: :destroy
  accepts_nested_attributes_for :product_images, reject_if: lambda {|attr| attr[:image].blank?},
    allow_destroy: true

  validates :description, presence: true
  validates :price, presence: true
  validates :quantity, presence: true
  validates :name, presence: true, uniqueness: {case_sensitive: false}
end
