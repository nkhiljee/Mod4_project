import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'
import ItemsContainer from './components/ItemsContainer'
import Footer from './components/Footer'
import Cart from './components/Cart'


import './App.css';

class App extends React.Component {

  state={
    loggedIn: false,
    cart: [],
  }

  login = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
// Add Item To Cart USING THIS METHOD
  addToCart = (e) => {
  console.log(e)
    const distinct = (value, index, self) => {
      let selfie = (self.map(i => i.id))
      return selfie.indexOf(value.id) === index
    } 
    
    this.setState({
      cart: [...this.state.cart, e],
    }, () => {    
    this.setState({
      cart: this.state.cart.filter(distinct)
    })
  })
  }
// HOW CHANGE THE QUANTITY OF THE ITEMS INSIDE THE CART
  quantityChange = (e, item) => {
    let array = this.state.cart.map(i => {
      if (i.id === item.id) {
        i.quantity = e.target.value
        return i
      } else {
        return i
      }
    })
    this.setState({
      cart: array
    })
  }
// REMOVE ITEM INSIDE THE CART 
  removeItem = (e) => {
    var a = this.state.cart
    a.splice(a.findIndex(i => i.id === e.id),1)
      this.setState({
        cart: a
      })
  }


  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/cart" render = {(routerProps) => <Cart {...routerProps} quantityChange={this.quantityChange} cart={this.state.cart} removeItem={this.removeItem}/> } />
            <Route path="/shop" render = {(routerProps) => <ItemsContainer {...routerProps} addToCart={this.addToCart} /> } />
            <Route path="/signin" render = {(routerProps) => <Signin {...routerProps} loggedIn={this.login} /> } />
            <Route path="/" render = {() => <Home /> } />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
  
    );
  }
}

export default App;