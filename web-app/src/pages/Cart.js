import React, { useState } from 'react'
import '../Styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useContext } from 'react'
import thumb from '../images/Cloves.jpg'
import userContext from '../context/User/userContext'

export default function Cart(props) {

    const context = useContext(userContext);
    const { getProfileInfo, userProfile, profileImg, getCartInfo, usercart } = context;
    const [quantity, setQuantity] = useState({})
    const [total, setTotal] = useState(0)

    const handleQuantity = (name, price) => (e) => {
        setQuantity(prev => ({
            ...prev,
            [name]: e.target.value * price
        }))
        console.log(quantity)
        handleTotal(name, e.target.value * price)
    }

    const handleTotal = (name, price) => {
        let newTotal = 0;
        for(const element in quantity) {
            if(element === name) newTotal += price
            else newTotal += quantity[element]
        }
        setTotal(newTotal)
    }

    useEffect(() => {
        window.scrollTo({ top: 0 })
        getProfileInfo()
    }, [])

    useEffect(() => {
        getCartInfo()
    }, [userProfile])

    useEffect(() => {
        let total = 0
        let quantity = {}
        usercart.forEach(element => {
            total += element.price
            quantity[element.productBrand + ' ' + element.productName + ' ' + element.varient] = element.price
        });
        setTotal(total)
        setQuantity(quantity)
    }, [usercart])

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
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usercart.map((e, key) => {
                                return (
                                <tr key={key}>
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
                                                <h6> <a href="/">{e.productBrand + ' ' + e.productName}</a> </h6>
                                                <p>{e.varient}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-title="Price">{e.price} ₹</td>
                                    <td className="quantity" data-title="Quantity">
                                        <input type="number" className="qty form-control" min={1} defaultValue="1" onChange={handleQuantity(e.productBrand + ' ' + e.productName + ' ' + e.varient, e.price)}></input>
                                    </td>
                                    <td data-title="Total">{quantity[e.productBrand + ' ' + e.productName + ' ' + e.varient] || e.price} ₹ </td>
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
                                    <td> {total} ₹</td>
                                </tr>
                                <tr>
                                    <th>Shipping Charges</th>
                                    <td> 40 ₹ </td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td> <b> {total + 40} ₹</b> </td>
                                </tr>
                            </tbody>
                        </table>
                        <a href="/checkout" className="btn-custom primary btn-block">Proceeed to Checkout</a>
                    </div>
                </div>
                {/* <!-- Cart form End --> */}

            </div>
        </section>

        <Footer/>
        </>
    )
}