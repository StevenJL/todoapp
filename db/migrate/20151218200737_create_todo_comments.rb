class CreateTodoComments < ActiveRecord::Migration
  def change
    create_table :todo_comments do |t|
      t.integer :todo_id, :nulll => false
      t.text :content, :null => false

      t.timestamps null: false
    end

    add_index :todo_comments, :todo_id
  end
end

