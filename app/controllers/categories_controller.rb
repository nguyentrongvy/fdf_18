class CategoriesController < ApplicationController
  before_action :logged_in_user, :verify_admin!, except: [:show]
  before_action :load_parent, only: [:new]

  def show
    @category = Category.find_by id: params[:id]
    if @category
      @products = @category.products
    else
      flash[:danger] = t ".none"
      redirect_to root_url
    end
  end

  def new
    @category = Category.new
  end

  def create
    @category = Category.new category_params
    if @category.save
      flash[:success] = t ".success"
      redirect_to @category
    else
      load_parent
      render :new
    end
  end

  private

  def category_params
    params.require(:category).permit :name, :description, :parent_id
  end

  def load_parent
    @parent = Category.all.map{|category| [category.name, category.id]}
  end
end
