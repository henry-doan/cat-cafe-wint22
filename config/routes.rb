Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    # no need for the user for the routes with devise
    resources :cats do
      resources :notes
    end

    get '/randocato', to: 'cats#randocato'
    
  end
end
