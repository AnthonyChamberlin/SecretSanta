class AddUserToXmasItems < ActiveRecord::Migration[5.1]
  def change
    add_reference :xmas_items, :user, foreign_key: true
  end
end
