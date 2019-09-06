import React, {Component} from 'react'

export default class Item extends Component {
    render() {
        return(
            <div>
                <div className="card" style={{width: "23rem"}}>
                    <img src={this.props.item.img_url} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.item.name}</h5>
                        <p className="card-text" id="card-desc">{this.props.item.description}</p>
                        <p className="card-text">Price: ${this.props.item.price}</p>
                        <button className="btn-sm btn-success" onClick={() => this.props.addToCart(this.props.item)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}


