Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :show, :create] do
      resources :messages, only: [:index, :create]
    end
    resources :messages, only: [:update, :destroy]
  end

  post 'api/direct_messages', to: 'api/channels#create_direct_message'
  post 'api/channels/:id/subscription', to: 'api/channels#subscribe'
  delete 'api/channels/:id/subscription', to: 'api/channels#unsubscribe'
  delete 'api/channels/:id/notifications', to: 'api/notifications#destroy'
end
