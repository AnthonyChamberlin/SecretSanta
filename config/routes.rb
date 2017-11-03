Rails.application.routes.draw do
  get 'users/show'

  root 'pages#home'
  get 'pages/home'

  devise_for :users

  resources :users do
    resources :xmas_items
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
