Rails.application.routes.draw do
  resources :players
  resources :users,
    only: [:new, :create],
    path_names: {new: 'signup'}

  get 'login' => 'sessions#login'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'

  root 'players#index'
end
