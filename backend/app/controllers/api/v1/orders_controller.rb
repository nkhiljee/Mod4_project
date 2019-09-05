class Api::V1::OrdersController < ApplicationController

    def index
        @orders = Order.all
        render json: @orders, include: :items
    end

    def show
        @order = Order.find(params[:id])
        render json: @order, include: :items
    end

    def create
        @order = Order.create(order_params)
        render json: @order, status: 201
    end

    def update
        @order = Order.find(params[:id])
        @order.update(order_params)
        render json: @order, status: 201
    end
    
    def destroy
        @order = Order.find(params[:id])
        @order.destroy
    end

    private

    def order_params
        params.require(:order).permit(:number, :user_id)
    end

end



