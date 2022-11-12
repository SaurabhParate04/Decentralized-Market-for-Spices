import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import BusinessUserContext from '../context/User/BusinessUserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo1 from '../images/logo 1.png'

const NavbarBusiness = () => {
    const context = useContext(BusinessUserContext);
    const {loggedInBusiness, logOutUser, getBusinessProfileInfo} = context;

    const handleLogout = ()=>{
        logOutUser();
    }

    useEffect(() => {
        if(loggedInBusiness) {
            getBusinessProfileInfo()
        }
    },[])
   
    return (
        <>
            <div className="main-header header-1 can-sticky sticky">
                <div className="topbar">
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
                                    <li className={`${loggedInBusiness ? "d-none": ""}`}>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li className={`${loggedInBusiness ? "d-none": ""}`}>
                                        <Link to="/signup">Signup</Link>
                                    </li>
                                    <li className={`${loggedInBusiness ? "": "d-none"}`}>
                                        <Link onClick={handleLogout} to="/">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <li className="menu-item menu-item-has-children">
                                <a href="/">Home Pages</a>
                                <ul className="submenu">
                                    <li className="menu-item"> <a href="/">Home v1</a> </li>
                                    <li className="menu-item"> <a href="home-v2.html">Home v2</a> </li>
                                </ul>
                            </li>
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
                            <li className="menu-item menu-item-has-children">
                                <a href="/">Pages</a>
                                <ul className="submenu">
                                    <li className="menu-item"> <a href="about-us.html">About Us</a> </li>
                                    <li className="menu-item"> <a href="/login">Login</a> </li>
                                    <li className="menu-item"> <a href="/signup">Sign Up</a> </li>
                                    <li className="menu-item"> <a href="/checkout">Checkout</a> </li>
                                    <li className="menu-item"> <a href="/cart">Cart</a> </li>
                                    <li className="menu-item"> <a href="/products">Products</a> </li>
                                </ul>
                            </li>
                            <li className="logo-wrapper">
                                {/* <!-- Logo --> */}
                                <a className="navbar-brand" href="/"> <img src={logo1} height="70px" alt="logo"></img> </a>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="/">Spicess</a>
                                <ul className="submenu">
                                    <li className="menu-item"> <a href="recipe-archive.html">Spices Archive</a> </li>
                                    <li className="menu-item"> <a href="recipe-details.html">Spices Details</a> </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="shop.html">Shop</a>
                            </li>
                            <li className="menu-item">
                                <a href="contact-us.html">Contact Us</a>
                            </li>
                        </ul>
                        <div className="header-controls">
                            <ul className="header-controls-inner">
                                <li className="cart-dropdown-wrapper cart-trigger">
                                    <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"1.5em"}} className="d-none"/>
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

export default NavbarBusiness