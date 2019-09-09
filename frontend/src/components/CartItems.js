import React, {Component} from 'react'



export default class CartItems extends Component {
    render() {
        let price = this.props.item.quantity * this.props.item.price
        return(
            <div>
                <div className="w-100">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-">
                            <img className="cartimg" src={this.props.item.img_url}/>
                            </div>
                            <div className="col-lg">
                                <div className="row">
                                    <div className="col" id="cartname">
                                    <strong>{this.props.item.name}</strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col" id="cartdesc">
                                    {this.props.item.description}
                                    </div>
                                </div>
                            </div>
                            <div className="col-" id="cartqty">
                                <select className="form-control" value={this.props.item.quantity} onChange={(e) => this.props.quantityChange(e, this.props.item)}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                            <div className="col-" id="cartprice">
                            ${price}
                            </div>
                            <div className="col-" id="cartremove">
                            <strong onClick={() => this.props.removeItem(this.props.item)}>X</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}