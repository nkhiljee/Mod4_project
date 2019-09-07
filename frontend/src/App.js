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
    cart: []
  }

  login = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  addToCart = (e) => {
    this.setState({
      cart: [...this.state.cart, e]
    })
    // this.props.history.push(this.state.cart)
  }

  render(){
    console.log(this.state.cart)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/cart" render = {(routerProps) => <Cart {...routerProps} cart={this.state.cart}/> } />
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