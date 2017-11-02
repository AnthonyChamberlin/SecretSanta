class CreateXmasItems < ActiveRecord::Migration[5.1]
  def change
    create_table :xmas_items do |t|
      t.string :name
      t.string :url_link
      t.decimal :price
      t.integer :total

      t.timestamps
    end
  end
end
