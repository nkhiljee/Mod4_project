
class Api::V1::AuthController < ApplicationController

    skip_before_action :check_authentication, only: [:create]

    def create
        # byebug
        user = User.find_by(email: params[:email])

        # byebug
        if user && user.authenticate(params[:password])
            # byebug
            render json: {email: user.email, token: encode_token({user_id: user.id}), id: user.id }
        else
            render json: {error: "Invalid email or password"}
        end
    end

end