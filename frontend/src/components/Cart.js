import React, {Component} from 'react'
import CartItems from './CartItems'
// import CartList from './CartList'


export default class Cart extends Component {
    render() {
        // console.log(this.props.history)
        // console.log(this.props.cart)
        let totalPrice = 0
        if (this.props.cart.length !== 0){
            for (let i=0; i < this.props.cart.length; i++) {
                totalPrice = totalPrice + (this.props.cart[i].price * this.props.cart[i].quantity)
            }
        } else {
            totalPrice = 0
        }
console.log(totalPrice)

        return(
            <div>
                <div className="container cart">
                    <div className="row justify-content-md-center">
                        <div className="col col-">
                        </div>
                        <div className="col col-lg">
                            <div style={{width: "60rem"}}><br/><br/>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item title" id="yourcart">Your Cart</li>
                                    {this.props.cart.map(item => <li className="list-group-item"><CartItems quantityChange={this.props.quantityChange} item={item}/></li>)}  
                                    <li className="list-group-item title" id="yourtotal">Total: {totalPrice} </li>
                                
                                </ul>
                            </div>
                        </div>
                        <div className="col col-">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}