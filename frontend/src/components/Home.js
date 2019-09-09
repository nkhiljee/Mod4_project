import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SimpleMap from './Map'

export default class Home extends Component {

    state = {
        bg: {}
    }


    move = (e) => {
        let bg = {
            backgroundPositionX: -e.screenX / 15 + "px",
            backgroundPositionY: -e.screenY / 15 + "px"
        }
        this.setState({
            bg: bg
        })
    }

    render() {
        return(
            <div>
                <div className="top" style={this.state.bg} onMouseMove={(e)=> this.move(e)}>
                    <div className="darkblock" >
                        <h2>BE AS STRONG AS YOUR MILITARY</h2>
                        <img src="https://demo.gridgum.com/wordpress/military//wp-content/uploads/2015/04/logo-khaki.png"/>
                        <h4>GEAR UP WITH A ROCKET LAUNCHER AND SOME YEEZY'S</h4>
                    </div>
                </div>

                <div className="category">
                    <h1>ARM YOUR INTENTIONS</h1>
                    <div className="row" id="row">
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="https://cdn.ironpla.net/i/1811/679/1811679_3945_159_0001.jpg" className="card-img-sm" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Vehicles</strong></h5>
                                    <p className="card-text">Search from an assortment of used military vehicles</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="https://stockx.imgix.net/Yeezy-Season-Three-Military-Boot-Rock.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256" className="card-img-sm" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Boots</strong></h5>
                                    <p className="card-text" id="card-desc">Search from an assortment of YEEZY's and used military boots</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="https://cdn3.volusion.com/jodua.csmpx/v/vspfiles/photos/PRAK47-2.jpg?1541702333" className="card-img-sm" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Guns</strong></h5>
                                    <p className="card-text" id="card-desc">We've narrowed down the best guns for you</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    {(localStorage.token) ?
                    <Link to="/shop"><button className="btn-lg btn-success" type="submit">Shop Now</button></Link>
                    :<Link to="/signin"><button className="btn-lg btn-success" type="submit">Shop Now</button></Link>
                    }
                    
                </div>
                <div className="how">
                    <h1>Testimonials</h1>
                    <div class="row">
                        <div class="col">
                        <h4 className="test-desc"><em>"Military Supply has been one of our trusted subcontractors for decades. They are consistent."</em></h4>
                        <br/>
                        <h6 className="test-name"><strong> - Lockheed Martin</strong></h6>
                        </div>
                        <div class="col">
                        <h4 className="test-desc"><em>"Military Supply is an emerging company in this space that we have our gaze set on"</em></h4>
                        <br/>
                        <h6 className="test-name"><strong> - Department of Defense</strong></h6>
                        </div>
                    </div>                                               
                </div>
                <div className="about">
                    <div className="row">
                        <div className="col">
                            <h1>Contact Us</h1>
                            <div className = "row">
                                <div className="col-">
                                    <h5 className="aboutsub">Address:</h5>
                                    <h5 className="aboutsub">Hours:</h5>
                                    <h5 className="aboutsub">Email:</h5>
                                    <h5 className="aboutsub">Sales:</h5>
                                    <h5 className="aboutsub">Service:</h5>
                                </div>
                                <div className="col">
                                    <h5 className="aboutsub1">800 S Fort Hood St, Killeen, TX 76541</h5>
                                    <h5 className="aboutsub1">10AM - 8PM | M-F</h5>
                                    <h5 className="aboutsub1">support@militarysupply.com</h5>
                                    <h5 className="aboutsub1">1-800-MSUPPLY</h5>
                                    <h5 className="aboutsub1">1-800-SERVICE</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col" id="map">
                            <SimpleMap/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}