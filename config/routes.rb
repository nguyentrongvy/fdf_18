Rails.application.routes.draw do
  root "home_pages#home"

  get "home_pages/home"
  get "home_pages/about"

  resources :products
end
