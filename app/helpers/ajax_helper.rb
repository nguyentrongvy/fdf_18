module AjaxHelper
  def render_success rating
    render json: {
      new_score: rating.product.current_score.round(2),
      rating_id: rating.id
    }, status: :created
  end

  def render_error rating
    render json: {
      reason:  rating.errors
    }, status: :unprocessable_entity
  end

  def render_error
    render json: {
      reason: t(".not_correct_user")
    }, status: :unprocessable_entity
  end
end
