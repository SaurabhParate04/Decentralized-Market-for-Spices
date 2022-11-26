import React, { useState, useContext, useEffect } from 'react'
// import Navbar from '../components/Navbar'
import "./Registration.css"
import userContext from '../context/User/UserContext'
import { useHistory } from 'react-router'

function Registration() {
    const history = useHistory();

    const context = useContext(userContext);
    const { globalCredentials } = context;

    const [credentialSignUp, setcredentialSignUp] = useState({ email: globalCredentials.email, username: globalCredentials.username, password: globalCredentials.password, addressl1: "", addressl2: "", firstname: "", lastname: "", phoneNumber: "", landmark: "", pincode: "" });

    useEffect(() => {
        console.log(credentialSignUp);
        // if (Object.keys(signupFormErrors).length === 0 && isSignupSubmit) {
        //     console.log(credentialSignUp);
        // }
    }, []);

    const handleReg_2 = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/api/user/createuser"
            /*eslint no-unused-vars:*/

            const response = await fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify({
                        email: credentialSignUp.email,
                        username: credentialSignUp.username,
                        password: credentialSignUp.password,
                        addressl1: credentialSignUp.addressl1,
                        addressl2: credentialSignUp.addressl2,
                        firstname: credentialSignUp.firstname,
                        lastname: credentialSignUp.lastname,
                        phoneNumber: credentialSignUp.phoneNumber,
                        landmark: credentialSignUp.landmark,
                        pincode: credentialSignUp.pincode,
                    })
                });
            const testjson = await response.json();
            // let imgRef = ref(firebaseStorage, `profile/${credentialSignUp.username}`);
            // uploadBytes(imgRef, profileImageReg).then(() => {
            //     console.log('image Uploaded!');
            // });
            history.go(-2);
        } catch (error) {
            console.error(error.message)
        }
    }

    const onChangeSignUp = (e) => {
        setcredentialSignUp({ ...credentialSignUp, [e.target.name]: e.target.value })
        //console.log([e.target.name],e.target.value)
    }

    return (
        <div>
            <div className="reg">
                <div className='overlay'>
                    {/* <Navbar /> */}
                    <div className="container_reg light-bg">
                        <div className="title_reg">Registration</div>
                        <div className="content_reg">
                            <form onSubmit={handleReg_2} onChange={onChangeSignUp}>
                                <div className="user-details_reg">
                                    <div className="input-box_reg">
                                        <span className="details_reg">First Name</span>
                                        <input type="text" name="firstname" placeholder="Enter your First name" />
                                    </div>

                                    <div className="input-box_reg">
                                        <span className="details_reg">Last name</span>
                                        <input type="text" name="lastname" placeholder="Enter your Last name" required />
                                    </div>
                                    <div className="input-box_reg">
                                        <span className="details">Username</span>
                                        <input type="text" name="username" placeholder="Enter Username" required />
                                    </div>
                                    <div className="input-box_reg">
                                        <span className="details">Password</span>
                                        <input type="text" name="password" placeholder="Enter Password" required />
                                    </div>
                                    <div className="input-box_reg">
                                        <span className="details">Email</span>
                                        <input type="text" name="email" placeholder="Enter Email" required />
                                    </div>
                                    <div className="input-box_reg">
                                        <span className="details">Phone Number</span>
                                        <input type="text" name="phoneNumber" placeholder="Enter your Phone Number" required />
                                    </div>
                                    <div className="input-box_reg" style={{ width: "100%" }}>
                                        <span className="details">Address</span>
                                        <input type="text" name="addressl1" placeholder="Enter your Address" required />
                                    </div>
                                    <div className="input-box_reg" style={{ width: "100%" }}>
                                        <input type="text" name="addressl2" placeholder="Enter your Address" />
                                    </div>

                                    <div className="input-box_reg">
                                        <span className="details">Landmark</span>
                                        <input type="text" name="landmark" placeholder="Enter Landmark" required />
                                    </div>
                                    <div className="input-box_reg">
                                        <span className="details">Pincode</span>
                                        <input type="number" name="pincode" placeholder="Enter Pincode" required />
                                    </div>
                                </div>

                                <div className="button">
                                    <input type="submit" value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration