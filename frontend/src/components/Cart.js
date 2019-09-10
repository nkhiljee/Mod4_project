import React, {Component} from 'react'
import CartItems from './CartItems'
// import CartList from './CartList'
import { Link } from 'react-router-dom'



export default class Cart extends Component {

    constructor(){
        super()
        this.state={
            readOrderFlag: false,
            isLoading: false,
            finalize: false
        }
    }

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

    quantityChange = (e, item) => {
        let array = this.state.readOrder.map(i => {
            if (i.id === item.id) {
                i.quantity = e.target.value
                return i
            } else {
                return i
            }
        })
        this.setState({
            readOrder: array
        })
      }

    removeItem = (e) => {
    var a = this.state.readOrder
    a.splice(a.findIndex(i => i.id === e.id),1)
        this.setState({
            readOrder: a
        })
    }

    finalize = () => {
        console.log("finalize")
        this.setState({
            finalize: !this.state.finalize,
            readOrder: [],
            cart: []
        })
    }

    readOrder = () => {
        fetch("http://localhost:3000/api/v1/orders", {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.token}`
          }
        })
        .then(res => res.json())
        .then(orders => {
            let orderLast = orders.filter(order => order.id == this.state.order.id)
            this.setState({
                readOrder: orderLast[0].purchaseditems,
                isLoading: !this.state.isLoading
            })
        })
      }
    
    createOrder = () => {
    let items =  this.props.cart.map(item => {
        return { 
        name: item.name,
        img_url: item.img_url,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
        classification: item.classification,
        order_id: 1,
        }
    })

    fetch("http://localhost:3000/api/v1/orders", {
        method: "POST",
        headers: {

        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            user_id: localStorage.id,
            purchaseditems_attributes: items
            })        
        })
    .then(res => res.json())
    .then(order => {
        this.readOrder()
        this.setState({
        order: order,
        cart: [],
        })
    })
    this.setState({
        readOrderFlag: !this.state.readOrderFlag
    })
    }  

    deleteOrder = () => {
        console.log(this.state.order.id)
        fetch(`http://localhost:3000/api/v1/orders/${this.state.order.id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
              }
        })
        .then(order =>{
            this.setState({
                readOrder: []
            })
        })
    }

    updateOrder = () => {
        let orderItems =  this.state.readOrder.map(item => {
            return { 
            id: item.id,
            name: item.name,
            img_url: item.img_url,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
            classification: item.classification
            }
        })
        fetch(`http://localhost:3000/api/v1/orders/${this.state.order.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                user_id: localStorage.id,
                purchaseditems_attributes: orderItems
            })        
        })
        .then(res => res.json())
        .then(items => {

            // this.setState({
            //     readOrder: items,
                
            //     // finalize: !this.state.finalize,
            // })
        })
        this.finalize()

    }

    render() {
        console.log(this.state.finalize)

        return(
            <div>
                <div className="container cart">
                    <div className="row justify-content-md-center">
                        <div className="col col-">

                        </div>
                        <div className="col col-lg">
                            <div style={{width: "60em"}}><br/><br/>
                            {this.state.finalize === false ?
                                this.state.readOrderFlag === true ? 
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item title" id="yourcart">Finalize Your Order</li>
                                        {this.state.isLoading ?
                                            this.state.readOrder.length !== 0 ?
                                                this.state.readOrder.map(item => <li className="list-group-item"><CartItems quantityChange={this.quantityChange} item={item} removeItem={this.removeItem}/></li>)
                                                : <li className="list-group-item title" id="cartempty"><span>Your order was deleted</span></li>
                                            :
                                            <p>Loading...</p>} 
                                        <li className="list-group-item title" id="yourtotal">Total: ${this.totalPrice()} </li>
                                        <li className="list-group-item title"><button style={{'margin-left': '5px', 'margin-right': '5px'}} className="btn btn-success" onClick={this.deleteOrder}>Delete</button><button style={{'margin-left': '5px', 'margin-right': '5px'}} className="btn btn-success" onClick={this.updateOrder}>Update & Finalize</button><button style={{'margin-left': '5px', 'margin-right': '5px'}} className="btn btn-success" onClick={this.finalize}>Finalize</button></li>
                                    </ul>
                                :
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item title" id="yourcart">Your Cart</li>
                                        {(this.props.cart.length !== 0) ? 
                                        this.props.cart.map(item => <li className="list-group-item"><CartItems quantityChange={this.props.quantityChange} item={item} removeItem={this.props.removeItem}/></li>)
                                        : <li className="list-group-item title" id="cartempty"><span>Your cart is empty</span></li>
                                        } 
                                        <li className="list-group-item title" id="yourtotal">Total: ${this.totalPrice()} </li>
                                        <li className="list-group-item title"><Link to={{pathname: '/order'}}><button className="btn btn-success" onClick={this.createOrder}>Checkout</button></Link></li>
                                    </ul>
                            :
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item title" id="yourcart">Your Order was Finalized</li>
                                    {
                                    <li className="list-group-item title" id="cartempty"><span>Your order has been submitted. <br/>We will contact you soon with your shipping information. <br/> Thank you for shopping with us!</span></li>
                                    } 
                                    <li className="list-group-item title"><a href="/shop"><button className="btn btn-success">Shop</button></a></li>
                                </ul>

                            }

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