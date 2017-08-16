Rails.application.routes.draw do
  resources :blog
  resources :blog_authors
  resources :blog_tags
end
