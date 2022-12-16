import React from "react";
import footerImg from '../images/footer-bottom-img.png'

const Footer = () => {
    return(
        // For testing purpose margin top is added
        <footer  className="ct-footer footer-3 footer-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 footer-widget">
                            <h5 className="widget-title">Spicess</h5>
                            <ul>
                                <li> <a href="/">Agro</a> </li>
                                <li> <a href="/">Generic</a> </li>
                                <li> <a href="/">Pepper</a> </li>
                                <li> <a href="/">Masalas Garam</a> </li>
                                <li> <a href="/">Agro</a> </li>
                                <li> <a href="/">Generic</a> </li>
                            </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 footer-widget">
                            <h5 className="widget-title">Legal</h5>
                            <ul>
                                <li> <a href="/">Privacy Policy</a> </li>
                                <li> <a href="/">Refund Policy</a> </li>
                                <li> <a href="/">Cookie Policy</a> </li>
                                <li> <a href="/">Terms &amp; Conditions</a> </li>
                                <li> <a href="/">Privacy Policy</a> </li>
                                <li> <a href="/">Refund Policy</a> </li>
                            </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 footer-widget">
                            <h5 className="widget-title">Payment &amp; Shipping</h5>
                            <ul>
                                <li> <a href="/">Terms Of Use</a> </li>
                                <li> <a href="/">Payment Methods</a> </li>
                                <li> <a href="/">Shipping Guide </a> </li>
                                <li> <a href="/">Estimated Delievery Time</a> </li>
                                <li> <a href="/">Terms Of Use</a> </li>
                                <li> <a href="/">Payment Methods</a> </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 footer-widget contact-widget">
                        <h5 className="widget-title">Subscribe Our Newsletter</h5>
                        <p className="mb-0">Subscribe Our Newletter to receive updates on new arrivals, special offers and other discount information.</p>
                        <form action="" method="post">
                            <div className="form-group">
                            <input type="email" placeholder="Your Email" className="form-control" name="email"></input>
                            <button type="submit" className="btn-custom primary shadow-none" name="button">Send</button>
                            </div>
                        </form>
                        <ul>
                            <li>
                                <i className="flaticon-email"></i>
                                doitezy@gmail.com
                            </li>
                            <li>
                                <i className="flaticon-location"></i>
                                28 Street, New York City, USA
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-left mb-3 mb-lg-0">
                            <p className="m-0">© Copyright 2021 - <a href="/">YourWebsite </a> All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 footer-widget pb-0 text-center text-lg-right">
                            <div className="payment-image">
                                <img src={footerImg} alt="img"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer