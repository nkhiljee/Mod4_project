import React, {Component} from 'react'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class Item extends Component {
    render() {
        return(
            <div>
                <div className="card" style={{width: "23rem"}}>
                    <img src={this.props.item.img_url} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{this.props.item.name}</strong></h5>
                        <p className="card-text" id="card-desc">{this.props.item.description}</p>
                        <p className="card-text"><strong>Price: ${this.props.item.price}</strong></p>
                        {/* <button type="button" className="btn btn-success" onClick={() => this.props.addToCart(this.props.item)}>Add to Cart</button> */}
                        <Button id="PopoverFocus" type="button" className="btn btn-success" onClick={() => this.props.addToCart(this.props.item)}>Add to Cart</Button>
                        <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                            <PopoverHeader>Added to Cart</PopoverHeader>
                        </UncontrolledPopover>
                    </div>
                </div>
            </div>
        )
    }
}


