import React from 'react'
import '../Styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Login(props) {
    return(
        <>
        <Navbar/>
        <section className="section auth-section login-sec bg-cover">
            <div className="container">
                <form className="auth-form light-bg" method="post">
                    <h1>Login</h1>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" name="username" defaultValue=""></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" name="password" defaultValue=""></input>
                    </div>
                    <div className="auth-controls form-group">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberMe"></input>
                        <label className="custom-control-label fw-400" htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <a href="#" className="btn-link fw-400">Forgot Password?</a>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-custom primary btn-block">Login</button>
                    </div>
                    <p className="form-group text-center">Don't have an account? <a href="register.html" className="btn-link">Create One</a> </p>
                </form>
            </div>
        </section>
        <Footer/>
        </>
    )
}