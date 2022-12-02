import React, { useContext, useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import BusinessUserContext from '../context/User/BusinessUserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import logo1 from '../images/logo 1.png'

const NavbarBusiness = () => {
    const context = useContext(BusinessUserContext);
    const { loggedInBusiness, logOutUser, getBusinessProfileInfo, userProfileBusiness, notifications, getNotifications } = context;

    const [notifyToggle, setnotifyToggle] = useState(false)
    const [dataFromBlockchain, setDataFromBlockchain] = useState()

    const handleLogout = () => {
        logOutUser();
    }

    const handlenotifyToggle = () => {
        setnotifyToggle(!notifyToggle)
    }

    useEffect(() => {
        if (loggedInBusiness) {
            getBusinessProfileInfo()
            if (userProfileBusiness.username) {
                getNotifications()
            }
        }
    }, [loggedInBusiness])

    const enrollAdmin = async() => {
        console.log(userProfileBusiness.usertype)
        try {
            const url = "http://localhost:5000/api/blockchain/enrolladmin"
            await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                    'usertype': userProfileBusiness.usertype
                }
            });
        } catch(error) {
            console.log(error)
        }
    }

    const registerUser = async() => {
        console.log(userProfileBusiness.username)
        try {
            const url = "http://localhost:5000/api/blockchain/registeruser"
            await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                    'user': userProfileBusiness.username,
                    'usertype': userProfileBusiness.usertype
                }
            });
        } catch(error) {
            console.log(error)
        }
    }

    const invoke = async() => {
        try {
            const url = "http://localhost:5000/api/blockchain/invoke"
            await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                }
            });
        } catch(error) {
            console.log(error)
        }
    }

    const query = async() => {
        try {
            console.log(userProfileBusiness.username)
            const url = "http://localhost:5000/api/blockchain/query"
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                    'user': userProfileBusiness.username,
                    'usertype': userProfileBusiness.usertype,
                    'channel': 'mychannel'
                }
            });
            const data = await response;
            setDataFromBlockchain(data)
            console.log(dataFromBlockchain)
        } catch(error) {
            console.log(error)
        }
    }

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
                                    <li className={`${loggedInBusiness ? "d-none": ""}`}>
                                        <Link to="/business/login">Login</Link>
                                    </li>
                                    <li className={`${loggedInBusiness ? "d-none": ""}`}>
                                        <Link to="/business/signup">Signup</Link>
                                    </li>
                                    <li className={`${loggedInBusiness ? "": "d-none"}`}>
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
                            {/* Business Home page  */}
                            <li className="menu-item menu-item-has-children">
                                <a href="/">Home Pages</a>
                                <ul className="submenu">
                                    <li className="menu-item"> <a href="/">Home</a> </li>
                                    <li className="menu-item"> <a href="/business">Business</a> </li>
                                </ul>
                            </li>

                            {/* Business Pages  */}
                            <li className="menu-item menu-item-has-children">
                                <a href="/">Pages</a>
                                <ul className="submenu">
                                    <li className="menu-item"> <a href="about-us.html">About Us</a> </li>
                                    <li className="menu-item"> <Link to={{ pathname: "/business/productform", state: { button_name: "Add New", info: { productName: "", productBrand: "", category: "", description: "", price: "", quantity: "" } } }} >Add new product</Link> </li>
                                    <li className="menu-item"> <a href="/business/marketplace">Explore market</a> </li>
                                    <li className="menu-item"> <a href="/business/myproducts">My Products</a> </li>
                                    <li className="menu-item"> <button onClick={enrollAdmin}>Enroll Admin</button> </li>
                                    <li className="menu-item"> <button onClick={registerUser}>Register User</button> </li>
                                    <li className="menu-item"> <button onClick={query}>Query</button> </li>
                                    <li className="menu-item"> <button onClick={invoke}>Invoke</button> </li>
                                </ul>
                            </li>

                            {/* Business Shop  */}
                            <li className="menu-item">
                                <a href="shop.html">Shop</a>
                            </li>

                            {/* Business logo  */}
                            <li className="logo-wrapper">
                                {/* <!-- Logo --> */}
                                <a className="navbar-brand" href="/"> <img src={logo1} height="70px" alt="logo"></img> </a>
                            </li>

                            {/* Business Spicess  */}
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

                            {/* Business Login  */}
                            <li className={`${loggedInBusiness ? "d-none" : "menu-item"}`}>
                                <Link to="/business/login">Login</Link>
                            </li>

                            {/* business signup  */}
                            <li className={`${loggedInBusiness ? "d-none" : "menu-item"}`}>
                                <Link to="/business/signup">Signup</Link>
                            </li>
                            
                            {/* Business Logout  */}
                            <li className={`${loggedInBusiness ? "menu-item" : "d-none"}`}>
                                <Link onClick={handleLogout} to="/">Logout</Link>
                            </li>
                        </ul>

                        {/* Business Cart  */}
                        <div className="header-controls">
                            <ul className="header-controls-inner">
                                <li className={`${notifyToggle ? "cart-dropdown-wrapper cart-trigger open" : "cart-dropdown-wrapper cart-trigger"}`} >
                                    <FontAwesomeIcon icon={faBell} style={{ fontSize: "1.5em" }} className={`${loggedInBusiness ? "" : "d-none"}`} onClick={handlenotifyToggle} />
                                    <ul className="cart-dropdown" style={{ "maxHeight": "290px", "overflowY": "auto", "boxShadow": "0px 2px 5px 0px sandybrown" }}>
                                        {
                                            notifications.map((e, key) => {
                                                return (
                                                    <li className="cart-item" key={key}>
                                                        <div className="cart-item-body">
                                                            <a href="/">{e.productName}</a>
                                                            <p style={{ margin: "0px" }}>{e.sender}</p>
                                                            <span className="custom-secondary">{e.quantity} x {e.price} ₹</span>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                            )}

                                        <li className="cart-buttons">
                                            <span className="btn-custom secondary btn-sm shadow-none">Clear Notifications</span>
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

export default NavbarBusiness