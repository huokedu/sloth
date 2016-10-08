class ChangeMessageEditDefault < ActiveRecord::Migration
  def change
    change_column :messages, :edited, :boolean, default: false
  end
end
