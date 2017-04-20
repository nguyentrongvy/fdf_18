class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.float :price
      t.integer :quantity
      t.string :image
      t.float :current_score
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
