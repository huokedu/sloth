class AddDirectColumnToChannels < ActiveRecord::Migration
  def change
    add_column :channels, :direct, :boolean, default: false
  end
end
