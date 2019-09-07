import React, {Component} from 'react'
import CartItems from './CartItems'
// import CartList from './CartList'


export default class Cart extends Component {
    render() {
        // console.log(this.props.history)
        console.log(this.props.cart)

        return(
            <div>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-">
                        1 of 3
                        </div>
                        <div className="col col-lg">
                            <h1>Your Cart</h1>
                            <div style={{width: "50rem"}}>
                                <ul className="list-group list-group-flush">
                                    {this.props.cart.map(item => <li className="list-group-item"><CartItems item={item}/></li>)}  
                                </ul>
                            </div>
                        </div>
                        <div className="col col-">
                        3 of 3
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}