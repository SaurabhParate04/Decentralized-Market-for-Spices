import React, { useState, useContext, useEffect} from 'react'
import '../Styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useHistory } from 'react-router'
import userContext from '../context/User/UserContext'

const Login = (props) => {

    const [credentialLogin, setcredentialLogin] = useState({ username: "", password: "" })
    
    const [loginFormErrors, setloginFormErrors] = useState({});
    const [isLoginSubmit, setIsLoginSubmit] = useState(false);

    const context = useContext(userContext);
    const { setglobalCredentials, setloggedIn } = context;

    const history = useHistory();

    const onChange = (e) => {
        setcredentialLogin({ ...credentialLogin, [e.target.name]: e.target.value })
        //console.log([e.target.name],e.target.value)
    }

    useEffect (() =>{
        console.log(loginFormErrors);
        if (Object.keys(loginFormErrors).length === 0 && isLoginSubmit) {
            console.log(credentialLogin);
        }
    },[loginFormErrors]);

    // Login validation
    const validateLogin = (values)=> {
        const errors = {};
        const regexUsernameLength = /^.{3,16}$/;
        const isWhitespace = /^(?=.*\s)/;
        const isContainsUppercase = /^(?=.*[A-Z])/;
        const isContainsLowercase = /^(?=.*[a-z])/;
        const isContainsNumber = /^(?=.*[0-9])/;
        const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
        const isValidLength = /^.{8,16}$/;
        
        // Username Validation
        if(!values.username){
            errors.username = "Username is required!";
        }
        else if(!regexUsernameLength.test(values.username)){
            errors.username = "Username must be 3-16 Characters Long.";
        }
        // Password validation
        if(!values.password){
            errors.password = "Password is required!";
        }
        else if(isWhitespace.test(values.password)){
            errors.password = "Password must not contain Whitespaces.";
        }
        else if(!isContainsUppercase.test(values.password)){
            errors.password = "Password must have at least one Uppercase Character.";
        }
        else if(!isContainsLowercase.test(values.password)){
            errors.password = "Password must have at least one Lowercase Character.";
        }
        else if(!isContainsNumber.test(values.password)){
            errors.password = "Password must contain at least one Digit.";
        }
        else if(!isContainsSymbol.test(values.password)){
            errors.password = "Password must contain at least one Special Symbol.";
        }
        else if(!isValidLength.test(values.password)){
            errors.password = "Password must be 8-16 Characters Long.";
        }
        return errors;
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        // console.log('submit btn clicked');
        setloginFormErrors(validateLogin(credentialLogin));
        setIsLoginSubmit(true);
        try {
            const url = "http://localhost:5000/api/user/loginuser";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },
                body: JSON.stringify({ username: credentialLogin.username, password: credentialLogin.password })
            });
            
            const json = await response.json();
            if (response.ok) {
                localStorage.setItem('SpiceMarketjwtToken', json.jwtToken);
                //console.log(json.jwtToken);
                setloggedIn(true);
                history.push('/');
            }
        } catch (error) {
            setloggedIn(false);
            console.error(error.message)
        }
    }

    return(
        <>
        <Navbar/>
        <section className="section auth-section login-sec bg-cover">
            <div className="container">
                <form className="auth-form light-bg" onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={onChange} className="form-control" placeholder="Username" name="username" defaultValue=""></input>
                    </div>
                    {loginFormErrors.username && <p className="error-text">{loginFormErrors.username}</p>}
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={onChange} className="form-control" placeholder="Password" name="password" defaultValue=""></input>
                    </div>
                    {loginFormErrors.password && <p className="error-text">{loginFormErrors.password}</p>}
                    <div className="auth-controls form-group">
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberMe"></input>
                        <label className="custom-control-label fw-400" htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <a href="/" className="btn-link fw-400">Forgot Password?</a>
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

export default Login