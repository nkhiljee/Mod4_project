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

  addToCart = (e) => {
    const distinct = (value, index, self) => {
      // console.log(value.id)
      // console.log(index)
      let selfie = (self.map(i => i.id))
      // console.log(selfie)
      // return self.indexOf(value) === index
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

  quantityChange = (e, item) => {
    // console.log(e.target.value)
    // console.log(item)
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


  render(){
    // console.clear()
    // console.log(this.state.cart)
    // console.log(this.state.array)

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/cart" render = {(routerProps) => <Cart {...routerProps} quantityChange={this.quantityChange} cart={this.state.cart}/> } />
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


{/* <div>
    <NavBar />
      <Route path="/paintings/new" render = {(routeProps) =><PaintingForm {...routeProps} add={this.addPainting} /> } />
      <Route path="/paintings/:id" render={(routeProps) => <PaintingCard {...routeProps} paintings={this.state.paintings}/> } /> 
      <Route path="/paintings" render={() => <PaintingList paintingObjs={this.state.paintings} />}/>
</div> */}