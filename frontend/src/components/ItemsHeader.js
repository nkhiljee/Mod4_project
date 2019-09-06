import React, {Component} from 'react'

export default class ItemsHeader extends Component {
    render() {
        return(
            <div className="itemsheader">
                <div className="carousel slide carousel-inner">
                    <p>BLOW OUT SALE!</p>
                    <button onclick="window.location.href = '/cart';" className="btn-lg btn-success">CART</button>
                </div>
            </div>
        )
    }
}