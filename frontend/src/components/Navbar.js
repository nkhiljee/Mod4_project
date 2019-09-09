import React, {Component} from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {

    logout = () => {
        localStorage.clear()
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">MILITARY SUPPLY </Link>
                    
                    <div className="navbar-nav ml-auto" id="navbarNavAltMarkup">
                    {(localStorage.token)  ?
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-item nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-item nav-link" to="/cart">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-item nav-link" href="/" onClick={this.logout}>Logout</a>
                            </li>
                        </ul>   
                    :
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-item nav-link" to="/signin">Sign In</Link>
                        </li>
                    </ul> 
                    }
                    </div>


                </nav>
            </div>
        )
    }
}