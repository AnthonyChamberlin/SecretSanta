Rails.application.routes.draw do
  get 'xmas_items/new'

  get 'xmas_items/create'

  get 'xmas_items/show'

  get 'users/show'

  root 'pages#home'
  
  get 'pages/home'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
