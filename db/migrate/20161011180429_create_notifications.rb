class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :message_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :notifications, [:user_id, :message_id]
  end
end
