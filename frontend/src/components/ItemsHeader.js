import React, {Component} from 'react'
import { Link } from 'react-router-dom'


export default class ItemsHeader extends Component {
    render() {
        return(
            <div className="itemsheader">
                <div className="carousel carousel-inner">
                    <p>BLOW OUT SALE!</p>
                    {/* <form action="/cart"> */}
                    <Link to="/cart"><button className="btn-lg btn-success">CART</button></Link>
                    {/* </form> */}
                </div>
            </div>
        )
    }
}