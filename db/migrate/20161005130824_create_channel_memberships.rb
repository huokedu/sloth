class CreateChannelMemberships < ActiveRecord::Migration
  def change
    create_table :channel_memberships do |t|
      t.integer :member_id, null: false
      t.integer :channel_id, null: false

      t.timestamps null: false
    end

    add_index :channel_memberships, [:member_id, :channel_id], unique: true;
  end
end
