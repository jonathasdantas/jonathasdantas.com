class CreateBlogTags < ActiveRecord::Migration[5.0]
  def change
    create_table :blog_tags do |t|
      t.name :tag

      t.timestamps
    end
  end
end