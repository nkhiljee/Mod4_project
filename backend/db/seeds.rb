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



i1 = Item.create(name:"2000 AM General", img_url: "https://cdn.ironpla.net/i/796/545/796545_6002_160_0001.jpg", description: "6.5L Diesel Engine, Automatic Transmission w/Park & Overdrive, 4x4, 10,300 lb. GVWR, 4 Door, Hard Top, Slant Back, Fording Kit, Tow Carrier Body, 37x12.50R16.5 Tires. The Humvee sells with a clean SF97.", price: 15000 , quantity: 1, classification: "Vehicle", order_id: o1.id)
i2 = Item.create(name:"1998 AM General", img_url: "https://cdn.ironpla.net/i/2149/658/2149658_6002_159_0001.jpg", description: "6.5L Diesel Engine, Automatic Transmission w/Park & Overdrive, 4x4, 10,300 lb. GVWR, 4 Door, Fording Kit, 37x12.50R16.5 Tires. The Humvee sells with a clean SF97.", price: 20000 , quantity: 1, classification: "Vehicle", order_id: o2.id)
i3 = Item.create(name:"2010 Oshkosh MK23", img_url: "https://cdn.ironpla.net/i/1811/679/1811679_3945_159_0001.jpg", description: "6x6, Cat 6 Cylinder Turbo Diesel Engine, Automatic Transmission, ABS, Central Tire Inflation System, 16.00R20 Tires, Fold-Down Bed Sides, Tailgate, Hard Top, Heater, 62,200 lb. GVWR", price: 35000 , quantity: 1, classification: "Vehicle", order_id: o3.id)
i4 = Item.create(name:"YEEZY Boots", img_url: "https://stockx.imgix.net/Yeezy-Season-Three-Military-Boot-Rock.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256", description: "Lace-up panelled military boots", price: 450 , quantity: 1, classification: "Boots", order_id: o1.id)
i5 = Item.create(name:"Pairs of Combat Boots", img_url: "https://cdn.ironpla.net/i/2262/691/2262691_11703_19801_0001.jpg", description: "Used Boots", price: 15 , quantity: 1 , classification: "Boots", order_id: o2.id)
i6 = Item.create(name:"Extreme Cold Weather Boots", img_url: "https://cdn.ironpla.net/i/2222/846/2222846_11703_0_0002.jpg", description: "Used Boots", price: 10 , quantity: 1 , classification: "Boots", order_id: o3.id)
i7 = Item.create(name:"AK-47", img_url: "https://cdn3.volusion.com/jodua.csmpx/v/vspfiles/photos/PRAK47-2.jpg?1541702333", description: "The AK-47, also known as a Kalashnikov, is a semi-automatic rifle developed in the Soviet Union shortly after World War II. ", price: 300 , quantity: 1 , classification: "Gun", order_id: o1.id)
i8 = Item.create(name:".308 Sniper Rifle", img_url: "https://machinegunsvegas.com/wp-content/uploads/2019/07/308_sniper_rifle.jpg", description: "The .308 Sniper Rifle is zeroed to 300-600 yards and comes equipped with a suppresser, great scope, and bipod. Shoot five rounds on the .308 Heavy Sniper Rifle!", price: 725 , quantity: 1 , classification: "Gun", order_id: o2.id)
i9 = Item.create(name:"RPG-7 Rocket Propelled Grenade Launcher", img_url: "https://cdn.shopify.com/s/files/1/1524/1342/products/ON6277__02_c861a92c-7b8f-4243-adbe-bd948cbd507e.jpg?v=1551523886", description: "BATF compliant deactivated Russian RPG-7 which was captured by the United States Marine Corps by the Explosive Ordnance Disposal unit.", price: 4000 , quantity: 1, classification: "Gun", order_id: o3.id)




