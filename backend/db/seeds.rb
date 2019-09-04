# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Item.destroy_all
Shop.destroy_all

u1 = User.create(name: "User1", email: "user1@gmail.com", password: "password")

i1 = Item.create(name:"Name1", description: "Description1", price: 11 , quantity: 1 , type: "type1", shop_id: s1.id)
i2 = Item.create(name:"Name2", description: "Description2", price: 12 , quantity: 2 , type: "type1", shop_id: s1.id)
i3 = Item.create(name:"Name3", description: "Description3", price: 13 , quantity: 3 , type: "type1", shop_id: s1.id)
i4 = Item.create(name:"Name4", description: "Description4", price: 14 , quantity: 4 , type: "type1", shop_id: s1.id)
i5 = Item.create(name:"Name5", description: "Description5", price: 15 , quantity: 5 , type: "type1", shop_id: s1.id)
i6 = Item.create(name:"Name6", description: "Description6", price: 16 , quantity: 6 , type: "type1", shop_id: s1.id)
i7 = Item.create(name:"Name7", description: "Description7", price: 17 , quantity: 7 , type: "type1", shop_id: s1.id)
i8 = Item.create(name:"Name8", description: "Description8", price: 18 , quantity: 8 , type: "type1", shop_id: s1.id)
i9 = Item.create(name:"Name9", description: "Description9", price: 19 , quantity: 9 , type: "type1", shop_id: s1.id)

s1 = Shop.create(user_id: u1.id)



