class BlogController < ApplicationController
  before_action :set_blog_post, only: [ :show, :update, :destroy ]
  
  # GET /blog
  def index
    @posts = BlogPost.all
    json_response(@posts)
  end

  # GET /blog/:id
  def show
    json_response(@post)
  end

  # POST /blog
  def create
    @post = BlogPost.create(blog_params)
    json_response(@post, :created)
  end

  # PUT /blog/:id
  def update
  end

  # DELETE /blog/:id
  def destroy
  end

  private
    def blog_params
      params.permit(
        :title,
        :subtitle,
        :content,
        :author_id,
        :featured,
        :comments_enabled
      )
    end

    def set_blog_post
      @post = BlogPost.find(params[:id])
    end
end
