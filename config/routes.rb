Rails.application.routes.draw do

  devise_for :users
  resources :players

  root 'players#index'
end
