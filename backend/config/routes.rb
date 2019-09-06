# Rails.application.routes.draw do
#   resources :orders
#   resources :items
#   resources :users
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
# end



Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show]
      resources :orders, only: [:index, :show, :create, :update, :destroy]
      resources :items, only: [:index, :show]
      post '/login', to: 'auth#create'
    end
  end
end