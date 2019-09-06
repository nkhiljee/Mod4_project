class User < ApplicationRecord
    has_many :orders
    has_many :items, through: :order
    

end
