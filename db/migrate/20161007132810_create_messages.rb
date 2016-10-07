class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :author_id, null: false, index: true
      t.integer :channel_id, null: false, index: true
      t.boolean :edited, default: true

      t.timestamps null: false
    end
  end
end
