import React, { useContext, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import userContext from '../context/User/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo1 from '../images/logo 1.png'

const Navbar = () => {
    const context = useContext(userContext);
    let location = useLocation();

    const { loggedIn, setloggedIn, setuserProfile, userProfile, logOutUser, getCartInfo, usercart, getProfileInfo } = context;
    const [cartToggle, setCartToggle] = useState(false)

    const handleLogout = () => {
        logOutUser();
    }

    const handleCartToggle = () => {
        setCartToggle(!cartToggle)
    }

    useEffect(() => {
        if (loggedIn) {
            getProfileInfo()
        }
    }, [loggedIn, getProfileInfo, userProfile])

    useEffect(() => {
        if (loggedIn) {
            getCartInfo()
        }
    }, [userProfile, loggedIn, getCartInfo])

    return (
        <>
            <div className="main-header header-1 can-sticky sticky">
                {/* <div className="topbar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="left-side">
                                    <li>
                                        <a href="/">
                                            <i className="fas fa-info-circle"></i>
                                            Online Help
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fas fa-phone"></i>
                                            +91 123 456 7890
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="right-side navbar">
                                    <li className="menu-item menu-item-has-children">
                                        <a href="/">Eng</a>
                                        <ul className="submenu">
                                            <li className="menu-item">
                                                <a href="/">English (US)</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/">English (UK)</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/">German</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="/">USD</a>
                                        <ul className="submenu">
                                            <li className="menu-item">
                                                <a href="/">USD</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/">INR</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/">KWD</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`${loggedIn ? "d-none" : ""}`}>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li className={`${loggedIn ? "d-none" : ""}`}>
                                        <Link to="/signup">Signup</Link>
                                    </li>
                                    <li className={`${loggedIn ? "d-none" : ""}`}>
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li className={`${loggedIn ? "" : "d-none"}`}>
                                        <Link onClick={handleLogout} to="/">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                <nav className="navbar">
                    <div className="container-fluid">
                        {/* <!-- Logo --> */}
                        <a className="navbar-brand d-lg-none" href="/"> <img src={logo1} alt="logo"></img> </a>
                        {/* <!-- Menu --> */}
                        <div className="header-control-left">
                            <div className="aside-toggler aside-trigger-right desktop-toggler">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        
                        <ul className="navbar-nav">
                            {/* Home pages  */}
                            <li className="menu-item menu-item-has-children">
                                <a href="/">Home Pages</a>
                                <ul className="submenu">
                                    <li className="menu-item"> <a href="/">Home v1</a> </li>
                                    <li className="menu-item"> <a href="home-v2.html">Home v2</a> </li>
                                </ul>
                            </li>

                            {/* Blog  */}
                            <li className="menu-item menu-item-has-children">
                                <a href="/">Blog</a>
                                <ul className="submenu">
                                    <li className="menu-item menu-item-has-children">
                                        <a href="blog-grid.html">Blog Archive</a>
                                        <ul className="submenu">
                                            <li className="menu-item"> <a href="blog-grid.html">Grid View</a> </li>
                                            <li className="menu-item"> <a href="blog-list.html">List View</a> </li>
                                            <li className="menu-item"> <a href="blog-masonry.html">Masonry</a> </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="blog-single-v1.html">Blog Single</a>
                                        <ul className="submenu">
                                            <li className="menu-item"> <a href="blog-single-v1.html">Blog Single v1</a> </li>
                                            <li className="menu-item"> <a href="blog-single-v2.html">Blog Single v2</a> </li>
                                            <li className="menu-item"> <a href="blog-single-v3.html">Blog single v3</a> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            {/* Pages  */}
                            <li className="menu-item menu-item-has-children">
                                <a href="/">Pages</a>
                                <ul className="submenu">
                                    <li className="menu-item"> <Link to="about-us.html">About Us</Link> </li>
                                    <li className="menu-item"> <Link to="/login">Login</Link> </li>
                                    <li className="menu-item"> <Link to="/signup">Sign Up</Link> </li>
                                    <li className="menu-item"> <Link to="/checkout">Checkout</Link> </li>
                                    <li className="menu-item"> <Link to="/cart">Cart</Link> </li>
                                    <li className="menu-item"> <Link to="/products">Products</Link> </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="shop.html">Shop</a>
                            </li>

                            {/* Logo */}
                            <li className="logo-wrapper">
                                <a className="navbar-brand" href="/"> <img src={logo1} height="70px" alt="logo"></img> </a>
                            </li>

                            {/* spicess */}
                            <li className="menu-item menu-item-has-children">
                                <a href="/">Spicess</a>
                                <ul className="submenu">
                                    <li className="menu-item"> <a href="recipe-archive.html">Spices Archive</a> </li>
                                    <li className="menu-item"> <a href="recipe-details.html">Spices Details</a> </li>
                                </ul>
                            </li>
                            
                            {/* <li className="menu-item">
                                <a href="contact-us.html">Contact Us</a>
                            </li> */}

                            {/* Languages */}
                            <li className="menu-item menu-item-has-children">
                                <a href="/">Eng</a>
                                <ul className="submenu">
                                    <li className="menu-item">
                                        <a href="/">English (US)</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/">English (UK)</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/">German</a>
                                    </li>
                                </ul>
                            </li>

                            {/* Currencies */}
                            <li className="menu-item menu-item-has-children">
                                <a href="/">USD</a>
                                <ul className="submenu">
                                    <li className="menu-item">
                                        <a href="/">USD</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/">INR</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/">KWD</a>
                                    </li>
                                </ul>
                            </li>

                            {/* Login  */}
                            <li className={`${loggedIn ? "d-none" : "menu-item"}`}>
                                <Link to="/login">Login</Link>
                            </li>

                            {/* Signup  */}
                            <li className={`${loggedIn ? "d-none" : "menu-item"}`}>
                                <Link to="/signup">Signup</Link>
                            </li>

                            {/* Profile */}
                            <li className={`${loggedIn ? "menu-item" : "d-none"}`}>
                                <Link to="/profile">Profile</Link>
                            </li>

                            {/* Logout  */}
                            <li className={`${loggedIn ? "menu-item" : "d-none"}`}>
                                <Link onClick={handleLogout} to="/">Logout</Link>
                            </li>
                        </ul>

                        {/* Cart  */}
                        <div className="header-controls">
                            <ul className="header-controls-inner">
                                <li className={`${cartToggle ? "cart-dropdown-wrapper cart-trigger open" : "cart-dropdown-wrapper cart-trigger"}`} >
                                    <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "1.5em" }} className={`${loggedIn ? "" : "d-none"}`} onClick={handleCartToggle} />
                                    <ul className="cart-dropdown" style={{ "maxHeight": "290px", "overflowY": "auto", "boxShadow": "0px 2px 5px 0px sandybrown" }}>
                                        {
                                            usercart.map((e, key) => {
                                                return (
                                                    <li className="cart-item" key={key}>
                                                        <img src={logo1}></img>
                                                        <div className="cart-item-body">
                                                            <a href="/">{e.productBrand + ' ' + e.productName}</a>
                                                            <p style={{ margin: "0px" }}>{e.varient}</p>
                                                            <span className="custom-secondary">{e.quantity} x {e.price} ₹</span>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                            )}
                                        <li className="cart-subtotal">
                                            <p> <strong>Subtotal: </strong> 450 ₹</p>
                                        </li>
                                        <li className="cart-buttons">
                                            <a href="/checkout" className="btn-custom primary btn-sm shadow-none" style={{ margin: "0 10px" }} >Checkout</a>
                                            <a href="/cart" className="btn-custom secondary btn-sm shadow-none">View Cart</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* <!-- Toggler --> */}
                            <div className="aside-toggler style-2 aside-trigger-left">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar