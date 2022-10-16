import React from "react";

const Footer = () => {
    return(
        // For testing purpose margin top is added
        <footer style={{marginTop:"206px"}} className="ct-footer footer-3 footer-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 footer-widget">
                            <h5 className="widget-title">Spicess</h5>
                            <ul>
                                <li> <a href="#">Agro</a> </li>
                                <li> <a href="#">Generic</a> </li>
                                <li> <a href="#">Pepper</a> </li>
                                <li> <a href="#">Masalas Garam</a> </li>
                                <li> <a href="#">Agro</a> </li>
                                <li> <a href="#">Generic</a> </li>
                            </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 footer-widget">
                            <h5 className="widget-title">Legal</h5>
                            <ul>
                                <li> <a href="#">Privacy Policy</a> </li>
                                <li> <a href="#">Refund Policy</a> </li>
                                <li> <a href="#">Cookie Policy</a> </li>
                                <li> <a href="#">Terms &amp; Conditions</a> </li>
                                <li> <a href="#">Privacy Policy</a> </li>
                                <li> <a href="#">Refund Policy</a> </li>
                            </ul>
                            </div>
                            <div className="col-md-4 col-sm-6 footer-widget">
                            <h5 className="widget-title">Payment &amp; Shipping</h5>
                            <ul>
                                <li> <a href="#">Terms Of Use</a> </li>
                                <li> <a href="#">Payment Methods</a> </li>
                                <li> <a href="#">Shipping Guide </a> </li>
                                <li> <a href="#">Estimated Delievery Time</a> </li>
                                <li> <a href="#">Terms Of Use</a> </li>
                                <li> <a href="#">Payment Methods</a> </li>
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
                            <p className="m-0">© Copyright 2021 - <a href="#">YourWebsite </a> All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 footer-widget pb-0 text-center text-lg-right">
                            <div className="payment-image">
                                <img src="assets/img/footer-bottom-img.png" alt="img"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
        
        // <footer className="footer-bg text-white footer-ele">
        //     <div className="container">
        //         <div className="row text-center">
        //             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
        //                 <h5 className="font-weight-bold">Spices</h5>
        //                 <div className="footer-line mb-3" ></div>
        //                 <p>Here add some information for footer content. Lorem ipsum dolor sit amet, ital consectetur lorem ipsum dolor sit amet adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        //             </div>
        //             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
        //                 <h5 className="font-weight-bold">Useful links</h5>
        //                 <div className="footer-line mb-3"></div>
        //                 <div className="footer-list"><a href="/" className="text-white footer-link">Your Account</a></div>
        //                 <div className="footer-list"><a href="/" className="text-white footer-link">Become an Affiliate</a></div>
        //                 <div className="footer-list"><a href="/" className="text-white footer-link">Shipping Rates</a></div>
        //                 <div className="footer-list"><a href="/" className="text-white footer-link">Help</a></div>
        //             </div>
        //             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
        //                 <h5 className="font-weight-bold">Contact</h5>
        //                 <div className="footer-line mb-3"></div>
        //                 <p>2125, Some Street, Any City, Maharashtra, India</p>
        //                 <p>gocharity@abc.com</p>
        //                 <p>+91 830 889 3558</p>
        //                 <p>+01 335 633 77</p>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    )
}

export default Footer