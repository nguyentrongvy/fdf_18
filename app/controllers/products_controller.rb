class ProductsController < ApplicationController
  before_action :load_category, :logged_in_user,
    :verify_admin!, only: [:new, :create]

  def index
  end

  def show
    @product = Product.includes(:comments).find_by id: params[:id]
    @comment = @product.comments.new
    @product_images = @product.product_images
  end

  def new
    @product = Product.new
    product_image = @product.product_images.build
  end

  def create
    @product = Product.new product_params
    if @product.save
      flash[:success] = t ".product_success"
      redirect_to @product
    else
      render :new
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :quantity,
      :category_id, product_images_attributes: [:id, :product_id, :image, :_destroy])
  end

  def load_category
    @category = Category.all.map{|category| [category.name, category.id]}
  end
end
