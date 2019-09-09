class CreatePurchaseditems < ActiveRecord::Migration[5.2]
  def change
    create_table :purchaseditems do |t|

      t.string :name
      t.string :img_url
      t.string :description
      t.integer :price
      t.integer :quantity
      t.string :classification
      t.integer :order_id
    end
  end
end
