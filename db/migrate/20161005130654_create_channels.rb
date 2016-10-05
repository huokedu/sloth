class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :purpose
      t.integer :creator_id, null: false, index: true

      t.timestamps null: false
    end

    add_index :channels, :name, unique: true
  end
end
