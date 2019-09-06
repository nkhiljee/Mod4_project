import React, {Component} from 'react'

export default class Navbar extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">MILITARY SUPPLY</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="navbar-nav ml-auto" id="navbarNavAltMarkup">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a className="nav-item nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-item nav-link" href="/shop">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-item nav-link" href="/cart">Cart</a>  
                            </li>
                            <li class="nav-item">
                                <a className="nav-item nav-link" href="/signin">Sign In</a>
                            </li>
                        </ul>   
                    </div>
                </nav>
            </div>
        )
    }
}