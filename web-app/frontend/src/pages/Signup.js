import React, { useState, useContext, useEffect } from 'react'
import '../Styles.css'
import "./LoginSignup.css"
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router'
import userContext from '../context/User/UserContext'

const Signup = (props) => {
    const [credentialSignUp, setcredentialSignUp] = useState({ email: "", username: "", password: "", addressl1: "", addressl2: "", firstname: "", lastname: "", phoneno: "", landmark: "", pincode: "" })

    const [signupFormErrors, setSignupFormErrors] = useState({});
    const [isSignupSubmit, setIsSignupSubmit] = useState(false);

    const context = useContext(userContext);
    const { setglobalCredentials, setloggedIn } = context;

    const history = useHistory();


    const onChangeSignUp = (e) => {
        setcredentialSignUp({ ...credentialSignUp, [e.target.name]: e.target.value })
        //console.log([e.target.name],e.target.value)
    }

    useEffect(() => {
        console.log(signupFormErrors);
        if (Object.keys(signupFormErrors).length === 0 && isSignupSubmit) {
            console.log(credentialSignUp);
        }
    }, [signupFormErrors]);

    // Signup Validation
    const validateSignup = (values) => {
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexUsernameLength = /^.{3,16}$/;
        const isWhitespace = /^(?=.*\s)/;
        const isContainsUppercase = /^(?=.*[A-Z])/;
        const isContainsLowercase = /^(?=.*[a-z])/;
        const isContainsNumber = /^(?=.*[0-9])/;
        const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/;
        const isValidLength = /^.{8,16}$/;

        // Email validation
        if (!values.email) {
            errors.email = "Email is required!";
        }
        else if (!regexEmail.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        // Username Validation
        if (!values.username) {
            errors.username = "Username is required!";
        }
        else if (!regexUsernameLength.test(values.username)) {
            errors.username = "Username must be 3-16 Characters Long.";
        }

        // Password validation
        if (!values.password) {
            errors.password = "Password is required!";
        }
        else if (isWhitespace.test(values.password)) {
            errors.password = "Password must not contain Whitespaces.";
        }
        else if (!isContainsUppercase.test(values.password)) {
            errors.password = "Password must have at least one Uppercase Character.";
        }
        else if (!isContainsLowercase.test(values.password)) {
            errors.password = "Password must have at least one Lowercase Character.";
        }
        else if (!isContainsNumber.test(values.password)) {
            errors.password = "Password must contain at least one Digit.";
        }
        else if (!isContainsSymbol.test(values.password)) {
            errors.password = "Password must contain at least one Special Symbol.";
        }
        else if (!isValidLength.test(values.password)) {
            errors.password = "Password must be 8-16 Characters Long.";
        }

        return errors;
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        setSignupFormErrors(validateSignup(credentialSignUp));
        setIsSignupSubmit(true);
        //console.log('signup btn clicked');

        try {
            //console.log(credentialSignUp);
            setglobalCredentials(credentialSignUp);
            //console.log(globalCredentials);
            if (Object.keys(signupFormErrors).length === 0 && isSignupSubmit === true)
                history.push("/register")
            else
                console.log("Invalid Input!");
            // history.push("/register")

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
            <Navbar />
            <div className="image">
                <div className="image-overlay">
                    <section className="section auth-section login-sec bg-cover ">
                        <div className="container">
                            <form onSubmit={handleSignUp} className="auth-form light-bg" method="post">
                                <h1>Sign Up</h1>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" placeholder="Username" name="username" id="label-susername" onChange={onChangeSignUp} value={credentialSignUp.username} defaultValue="" ></input>
                                </div>
                                {signupFormErrors.username && <p className="error-text">{signupFormErrors.username}</p>}

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" id="label-semail" onChange={onChangeSignUp} value={credentialSignUp.email} defaultValue=""></input>
                                </div>
                                {signupFormErrors.email && <p className="error-text">{signupFormErrors.email}</p>}

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" name="password" id="label-spassword" onChange={onChangeSignUp} value={credentialSignUp.password} defaultValue=""></input>
                                </div>
                                {signupFormErrors.password && <p className="error-text">{signupFormErrors.password}</p>}

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
                </div>
            </div>
            {/* <Footer/> */}
        </>
    )
}

export default Signup