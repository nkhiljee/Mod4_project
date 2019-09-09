import React, {Component} from 'react'
import CartItems from './CartItems'
// import CartList from './CartList'


export default class Cart extends Component {

    totalPrice = () => {
        let totalPrice = 0
        if (this.props.cart.length !== 0){
            for (let i=0; i < this.props.cart.length; i++) {
                totalPrice = totalPrice + (this.props.cart[i].price * this.props.cart[i].quantity)
            }
        } else {
            totalPrice = 0
        }
        return totalPrice
    }

    render() {

        return(
            <div>
                <div className="container cart">
                    <div className="row justify-content-md-center">
                        <div className="col col-">
                        </div>
                        <div className="col col-lg">
                            <div style={{width: "60em"}}><br/><br/>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item title" id="yourcart">Your Cart</li>
                                    {(this.props.cart.length !== 0) ? 
                                    this.props.cart.map(item => <li className="list-group-item"><CartItems quantityChange={this.props.quantityChange} item={item} removeItem={this.props.removeItem}/></li>)
                                    : <li className="list-group-item title" id="cartempty"><span>Your cart is empty</span></li>
                                    } 
                                    <li className="list-group-item title" id="yourtotal">Total: ${this.totalPrice()} </li>
                                    <li className="list-group-item title"><button className="btn btn-success">Checkout</button></li>
                                </ul>
                            </div><br/><br/>
                        </div>
                        <div className="col col-">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}