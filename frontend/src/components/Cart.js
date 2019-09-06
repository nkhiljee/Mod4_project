import React, {Component} from 'react'
import CartItems from './CartItems'
import CartList from './CartList'


export default class Cart extends Component {
    render() {
        return(
            <div>
                <div className="cartitems">
                    <CartItems />
                </div>
                <div className="cartlist">
                    <CartList/>
                </div>
                
            </div>
        )
    }
}