class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :img_url
      t.string :description
      t.integer :price
      t.integer :quantity
      t.string :classification


      # t.timestamps
    end
  end
end
