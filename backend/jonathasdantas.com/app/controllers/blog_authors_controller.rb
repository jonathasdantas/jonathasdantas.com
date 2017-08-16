class BlogAuthorsController < ApplicationController
  before_action :set_author, only: [ :show, :update, :destroy ]
  
  # GET /blog_authors
  def index
    @authors = BlogAuthor.all
    json_response(@authors)
  end

  # GET /blog_authors/:id
  def show
    json_response(@author)
  end

  # POST /blog_authors
  def create
    @author = BlogAuthor.create(blog_author_params)
    json_response(@author, :created)
  end

  # PUT /blog_authors/:id
  def update
  end

  # DELETE /blog_authors/:id
  def destroy
  end

  private
    def blog_author_params
      params.permit(
        :first_name,
        :last_name,
        :display_name
      )
    end

    def set_author
      @author = BlogAuthor.find(params[:id])
    end
end
