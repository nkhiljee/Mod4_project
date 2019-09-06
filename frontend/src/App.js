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

  constructor(){
    super()
    this.state = {
        items: [],
        itemsMaster: []
    }
  }

  componentDidMount(){
      // fetch("http://localhost:3000/api/v1/items", {
      //     method: "GET",
      //     headers: {
      //         Authorization: "Barer {token}"
      //     }
      // })
      fetch("http://localhost:3000/api/v1/items")
      .then(res => res.json())
      .then(items => {
          this.setState({
              items: items,
              itemsMaster: items,

          })
      })
  }

  addToCart = (e) => {
    console.log(e)

    fetch("http://localhost:3000/api/v1/orders", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          number: 1,  // NOT IMPORTANT OR JUST USE ORDER ID
          user_id: 1, //GET FROM LOCAL STORAGE OR UPDATE BACKEND
          items: [
            // {
            //   id: 1,
            //   name: "2000 AM General",
            //   img_url: "https://cdn.ironpla.net/i/796/545/796545_6002_160_0001.jpg",
            //   description: "6.5L Diesel Engine, Automatic Transmission w/Park & Overdrive, 4x4, 10,300 lb. GVWR, 4 Door, Hard Top, Slant Back, Fording Kit, Tow Carrier Body, 37x12.50R16.5 Tires. ***No further demilitarization is required. The HMMWV is available for pick up as shown.*** The Humvee sells with a clean SF97.",
            //   price: 15000,
            //   quantity: 1,
            //   classification: "Vehicle",
            //   order_id: 1
            // }
          ]
      })
    })
    .then(res=> res.json())
    .then()

  }
  

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/cart" render = {() => <Cart /> } />
            <Route path="/shop" render = {() => <ItemsContainer addToCart={this.addToCart} items={this.state.items}/> } />
            <Route path="/signin" render = {() => <Signin /> } />
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