class CreateBlogPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :blog_posts do |t|
      t.string :title
      t.string :subtitle
      t.text :content
      t.integer :author_id
      t.date :date_published
      t.boolean :featured
      t.boolean :enabled
      t.boolean :coments_enabled
      t.integer :read_time
      t.integer :shares
      t.integer :views

      t.timestamps
    end
  end
end
