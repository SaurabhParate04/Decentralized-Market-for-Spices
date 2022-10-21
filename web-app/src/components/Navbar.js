import React, {useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import userContext from '../context/User/userContext'
import logo1 from '../images/logo 1.png'

const Navbar = () => {
    //hook declarations
    const context = useContext(userContext);
    let location = useLocation();

    // destructuring
    const {loggedIn,setloggedIn,setuserProfile, logOutUser} = context;

    // submit btn handle
    const handleLogout = ()=>{
        logOutUser();
    }
   
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
                                    <li className={`${loggedIn ? "d-none": ""}`}>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li className={`${loggedIn ? "d-none": ""}`}>
                                        <Link to="/signup">Signup</Link>
                                    </li>
                                    <li className={`${loggedIn ? "": "d-none"}`}>
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
                                    <li className="menu-item"> <a href="login.html">Login</a> </li>
                                    <li className="menu-item"> <a href="register.html">Sign Up</a> </li>
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
                                    <i className="flaticon-shopping-basket"></i>
                                    <ul className="cart-dropdown">
                                        <li className="cart-item">
                                            <img src="../images/products/Cloves.jpg" alt="product"></img>
                                            <div className="cart-item-body">
                                                <a href="/">Clove</a>
                                                <span className="custom-secondary">2x 18.00$</span>
                                            </div>
                                        </li>
                                        <li className="cart-item">
                                            <img src="../images/products/Cloves.jpg" alt="product"></img>
                                            <div className="cart-item-body">
                                                <a href="/">Agro</a>
                                                <span className="custom-secondary">1x 24.25$</span>
                                            </div>
                                        </li>
                                        <li className="cart-subtotal">
                                            <p> <strong>Subtotal: </strong> 54.25$</p>
                                        </li>
                                        <li className="cart-buttons">
                                            <a href="checkout.html" className="btn-custom primary btn-sm shadow-none">Checkout</a>
                                            <a href="cart.html" className="btn-custom secondary btn-sm shadow-none">View Cart</a>
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
            {/* <nav className="navbar fixed-top navbar-expand-md navbar-dark navbar-custom align-items-center">
                <a className="navbar-brand" href="/">Spices</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" id="burger">
                    <span className="navbar-toggler-icon" style={{stroke:'white'}}></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarToggler"> 
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className={`nav-link mx-3 ${location.pathname==="/" ?"active":""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link mx-3 ${location.pathname==="/products" ?"active":""}`} to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link mx-3 ${location.pathname==="/aboutus" ?"active":""}`} to="/aboutus">About us</Link>
                        </li>
                        <li className={`${loggedIn ? "d-none": "nav-item "}`}>
                            <Link className={`nav-link mx-3 ${location.pathname==="/login" ?"active":""}`}  to="/login">Login</Link>
                        </li>
                        <li className={`${loggedIn ? "nav-item": "d-none "}`}>
                            <Link className={`nav-link mx-3 ${location.pathname==="/profile" ?"active":""}`}  to="/profile">Profile</Link>
                        </li>
                        <li className={`${loggedIn ? "d-none": "nav-item mx-3 text-center"}`}>
                            <Link className={`btn px-3 `} id="auth-btn" to="/login">Signup</Link>
                        </li>
                        <li className={`${loggedIn ? "nav-item mx-3 text-center": "d-none"}`}>
                            <Link className={`btn px-3`} id="auth-btn" onClick={handleLogout} to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </>
    )
}

export default Navbar