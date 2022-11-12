import React, { useState, useContext, useEffect} from 'react'
import '../Styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useHistory } from 'react-router'
import userContext from '../context/User/UserContext'

const Signup = (props) => {

    return(
        <>
        <Navbar/>
        <section className="section auth-section login-sec bg-cover">
            <div className="container">
                <form className="auth-form light-bg" method="post">
                    <h1>Sign Up</h1>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" name="username" defaultValue=""></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email Address" name="email" defaultValue=""></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" name="password" defaultValue=""></input>
                    </div>
                    <div className="auth-controls form-group">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberMe"></input>
                        <label className="custom-control-label fw-400" htmlFor="rememberMe">Agree to our <a href="/" className="btn-link">terms &amp; conditions</a> </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-custom primary btn-block">Sign Up</button>
                    </div>
                    <p className="form-group text-center">Already have an account? <a href="/login" className="btn-link">Login</a> </p>
                </form>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Signup