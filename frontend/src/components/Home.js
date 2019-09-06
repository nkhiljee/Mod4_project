import React, {Component} from 'react'

export default class Home extends Component {
    render() {
        return(
            <div>
                <div className="top">
                    <div className="darkblock">
                        <h2>BE AS STRONG AS YOUR MILITARY</h2>
                        <img src="https://demo.gridgum.com/wordpress/military//wp-content/uploads/2015/04/logo-khaki.png"/>
                        <h4>GEAR UP AND MAN UP WITH A ROCKET LAUNCHER AND SOME YEEZY'S</h4>
                    </div>
                </div>

                <div className="category">
                    <h1>BUY WEAPONS WITHOUT GOING TO KHAZAKHSTAN</h1>
                    <div className="row">
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
                    <form action="/shop">
                        <button className="btn-lg btn-success" type="submit">Shop Now</button>
                    </form>                           
                </div>
                <div className="how">
                    <h1>Testimonials</h1>
                    <div class="row">
                        <div class="col">
                        <h4 className="test-desc"><em>"Military supply provided us with all supplies we needed to get the job done without dealing with 'the other side' "</em></h4>
                        <br/>
                        <h6 className="test-name"><strong> - Idi Amin</strong></h6>
                        </div>
                        <div class="col">
                        <h4 className="test-desc"><em>"Well well well military supply 'off the record' supplied us"</em></h4>
                        <br/>
                        <h6 className="test-name"><strong> - Muammar Gaddafi</strong></h6>
                        </div>
                    </div>                                               
                </div>

            </div>
        )
    }
}