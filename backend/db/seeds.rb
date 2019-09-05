# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Order.destroy_all
Item.destroy_all

u1 = User.create(name: "User1", email: "user1@gmail.com", password: "password")

o1 = Order.create(number: 1, user_id: u1.id)
o2 = Order.create(number: 2, user_id: u1.id)
o3 = Order.create(number: 3, user_id: u1.id)



i1 = Item.create(name:"Name1", description: "Description1", price: 11 , quantity: 1 , classification: "type1", order_id: o1.id)
i2 = Item.create(name:"Name2", description: "Description2", price: 12 , quantity: 2 , classification: "type2", order_id: o2.id)
i3 = Item.create(name:"Name3", description: "Description3", price: 13 , quantity: 3 , classification: "type3", order_id: o3.id)
i4 = Item.create(name:"Name4", description: "Description4", price: 14 , quantity: 4 , classification: "type4", order_id: o1.id)
i5 = Item.create(name:"Name5", description: "Description5", price: 15 , quantity: 5 , classification: "type5", order_id: o2.id)
i6 = Item.create(name:"Name6", description: "Description6", price: 16 , quantity: 6 , classification: "type6", order_id: o3.id)
i7 = Item.create(name:"Name7", description: "Description7", price: 17 , quantity: 7 , classification: "type7", order_id: o1.id)
i8 = Item.create(name:"Name8", description: "Description8", price: 18 , quantity: 8 , classification: "type8", order_id: o2.id)
i9 = Item.create(name:"Name9", description: "Description9", price: 19 , quantity: 9 , classification: "type9", order_id: o3.id)




