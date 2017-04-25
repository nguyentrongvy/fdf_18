class CommentsController < ApplicationController
  before_action :logged_in_user, only: [:create]

  def create
    @comment = current_user.comments.build comment_params

    if @comment.save
      render json: {
        html_comment: render_to_string(partial: "/comments/comment",
          locals: {comment: @comment},
          layout: false
        )
      }, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit :content, :product_id
  end
end
