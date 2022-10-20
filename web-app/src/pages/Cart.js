import React from 'react'
import '../Styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useContext } from 'react'
import thumb from '../images/Cloves.jpg'
import userContext from '../context/User/userContext'

export default function ProductDetails(props) {

    // const id = props.location.state.id
    // const description = props.location.state.description
    // const title = props.location.state.title
    // const price = props.location.state.price

    const context = useContext(userContext);
    const { getProfileInfo, userProfile, profileImg } = context;
    const { firstname, lastname, username, email, address, phoneNumber, userCart } = userProfile;

    useEffect(() => {
        window.scrollTo({ top: 0 })
        getProfileInfo()
    }, [])

    return (
        <>
        <Navbar/>

        <section className="section extra-padding">
            <div className="container">

                {/* <!-- Cart Table Start --> */}
                <table className="ct-responsive-table">
                    <thead>
                        <tr>
                            <th className="remove-item"></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qunantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userCart.map((e) => {
                                return (
                                <tr>
                                    <td className="remove">
                                        <button type="button" className="close-btn close-danger remove-from-cart">
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </td>
                                    <td data-title="Product">
                                        <div className="cart-product-wrapper">
                                            <img src={thumb} alt="prod1"></img>
                                            <div className="cart-product-body">
                                                <h6> <a href="/">{e.prodName}</a> </h6>
                                                <p>{e.varient}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-title="Price">{e.price} ₹</td>
                                    <td className="quantity" data-title="Quantity">
                                        <input type="number" className="qty form-control" defaultValue="1"></input>
                                    </td>
                                    <td data-title="Total">{e.quantity * e.price}</td>
                                </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                {/* <!-- Cart Table End --> */}

                {/* <!-- Coupon Code Start --> */}
                <div className="row">
                    <div className="col-lg-5">
                        <div className="form-group mb-0">
                            <div className="input-group mb-0">
                                <input type="text" className="form-control" placeholder="Enter Coupon Code" aria-label="Coupon Code"></input>
                                <div className="input-group-append">
                                    <button className="btn-custom primary" type="button">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Coupon Code End --> */}

                {/* <!-- Cart form Start --> */}
                <div className="row ct-cart-form">
                    <div className="offset-lg-6 col-lg-6">
                        <h4>Cart Total</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Subtotal</th>
                                    <td>90.99$</td>
                                </tr>
                                <tr>
                                    <th>Tax</th>
                                    <td> 9.99$ <span className="small">(11%)</span> </td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td> <b>99.99$</b> </td>
                                </tr>
                            </tbody>
                        </table>
                        <a href="/" className="btn-custom primary btn-block">Proceeed to Checkout</a>
                    </div>
                </div>
                {/* <!-- Cart form End --> */}

            </div>
        </section>

        <Footer/>
        </>
    )
}