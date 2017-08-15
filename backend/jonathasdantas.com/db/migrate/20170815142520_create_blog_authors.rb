class CreateBlogAuthors < ActiveRecord::Migration[5.0]
  def change
    create_table :blog_authors do |t|
      t.string :first_name
      t.string :last_name
      t.string :display_name

      t.timestamps
    end
  end
end
