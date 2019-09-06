import React, {Component} from 'react'
import ItemsHeader from './ItemsHeader'
import Item from "./Item"

export default class ItemsContainer extends Component {

    constructor(){
        super()
        this.state = {
            items: [],
            itemsMaster: []
        }
      }

    componentDidMount(){
        fetch("http://localhost:3000/api/v1/items", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(items => {
            this.setState({
                items: items,
                itemsMaster: items,
  
            })
        })
    }

    render() {
        // console.log(this.props)
        return(
            <div>
                <ItemsHeader />
                <div className="cardContainer">
                {this.state.items.map(item => <Item addToCart={this.props.addToCart} item={item}/>)}
                </div>
            </div>
        )
    }
}