class PurchaseditemsController < ApplicationController

    def create
        purchaseditem = Purchaseditem.create(purchased_params)
        render json: education
    end
    
    def index
        render json: Purchaseditem.all
    end
    
    
    def purchased_params
        params.permit(:name, :img_url, :description, :price, :quantity, :classification, :order_id)
    end
    
    # def define_current_purchase
    #     if params[:id]
    #         @purchased_params = Purchaseditem.find(params[:id])
    #     else
    #         @purchased_params = Purchaseditem.new
    #     end
    # end
    
    # def purchased_params
    #     @purchased_params
    # end



end
