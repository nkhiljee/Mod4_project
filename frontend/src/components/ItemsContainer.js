import React, {Component} from 'react'
import ItemsHeader from './ItemsHeader'
import Item from "./Item"

export default class ItemsContainer extends Component {

    render() {

        return(
            <div>
                <ItemsHeader />
                <div className="cardContainer">
                {this.props.items.map(item => <Item addToCart={this.props.addToCart} item={item}/>)}
                </div>
            </div>
        )
    }
}