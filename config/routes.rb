Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :show, :create]
  end

  post 'api/channels/:id/subscribe', to: 'api/channels#subscribe'
end
