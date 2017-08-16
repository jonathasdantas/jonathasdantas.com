class BlogTagsController < ApplicationController
  before_action :set_tag, only: [ :show, :update, :destroy ]
  
  # GET /blog_tags
  def index
    @tags = BlogAuthor.all
    json_response(@tags)
  end

  # GET /blog_tags/:id
  def show
    json_response(@tag)
  end

  # POST /blog_tags
  def create
    @tag = BlogAuthor.create(blog_tag_params)
    json_response(@tag, :created)
  end

  # PUT /blog_tags/:id
  def update
  end

  # DELETE /blog_tags/:id
  def destroy
  end

  private
    def blog_tag_params
      params.permit(
        :tag
      )
    end

    def set_tag
      @tag = BlogTag.find(params[:id])
    end
end
