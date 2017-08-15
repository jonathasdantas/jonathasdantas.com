class CreateBlogPostAuthors < ActiveRecord::Migration[5.0]
  def change
    create_table :blog_post_authors do |t|
      t.integer :blog_post_id
      t.integer :blog_author_id

      t.timestamps
    end
  end
end
