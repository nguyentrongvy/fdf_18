class Product < ApplicationRecord
  belongs_to :category
  has_many :line_items
  has_many :comments
  has_many :ratings
  has_many :product_images
end
