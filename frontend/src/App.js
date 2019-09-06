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



  addToCart = (e) => {
    console.log(e)
    

  }
  

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/cart" render = {() => <Cart /> } />
            <Route path="/shop" render = {() => <ItemsContainer addToCart={this.addToCart} /> } />
            <Route path="/signin" render = {(routerProps) => <Signin {...routerProps} /> } />
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