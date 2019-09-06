class Api::V1::UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, include: :orders
    end

    def show
        @user = User.find(params[:id])
        render json: @user, include: :orders
    end


    # private

    # def user_params
    #     params.require(:order).permit(:name, :email :password)
    # end

end