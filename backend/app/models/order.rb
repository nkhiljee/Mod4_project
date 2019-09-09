class Order < ApplicationRecord
    has_many :purchaseditems
    belongs_to :user
    accepts_nested_attributes_for :purchaseditems
end
