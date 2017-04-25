class ProductsController < ApplicationController
  def index
  end

  def show
    @product = Product.includes(:comments).find_by id: params[:id]
    @comment = @product.comments.new
  end
end
