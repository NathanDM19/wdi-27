class AddAddressToDogs < ActiveRecord::Migration[5.2]
  def change
    add_column :dogs, :address, :text
  end
end
