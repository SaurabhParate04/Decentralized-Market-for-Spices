import React, { useState, useContext, useEffect } from 'react'
import "./Registration.css"
import BusinessUserContext from '../context/User/BusinessUserContext'
import { useHistory } from 'react-router'

function RegistrationBusiness() {
  const history = useHistory();

  const context = useContext(BusinessUserContext);
  const { globalBusinessCredentials } = context;


  const [credentialSignUpBusiness, setcredentialSignUpBusiness] = useState({ email: globalBusinessCredentials.email, username: globalBusinessCredentials.username, password: globalBusinessCredentials.password, addressl1: "", addressl2: "", firstname: "", lastname: "", phoneNumber: "", landmark: "", pincode: "", usertype: "" });

  const [usertype, setusertype] = useState(credentialSignUpBusiness.usertype)

  useEffect(() => {
    console.log(credentialSignUpBusiness);
    // if (Object.keys(signupFormErrors).length === 0 && isSignupSubmit) {
    //     console.log(credentialSignUp);
    // }
  }, []);

  const handleUsertype = (e) => {
    setusertype(e.target.value)
    console.log(e)
}

  const handleReg_2 = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/businessuser/createuser"
      /*eslint no-unused-vars:*/

      const response = await fetch(url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
          },
          body: JSON.stringify({
            email: credentialSignUpBusiness.email,
            username: credentialSignUpBusiness.username,
            password: credentialSignUpBusiness.password,
            addressl1: credentialSignUpBusiness.addressl1,
            addressl2: credentialSignUpBusiness.addressl2,
            firstname: credentialSignUpBusiness.firstname,
            lastname: credentialSignUpBusiness.lastname,
            phoneNumber: credentialSignUpBusiness.phoneNumber,
            landmark: credentialSignUpBusiness.landmark,
            pincode: credentialSignUpBusiness.pincode,
            usertype: usertype,
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

  const onChangeSignUpBusiness = (e) => {
    setcredentialSignUpBusiness({ ...credentialSignUpBusiness, [e.target.name]: e.target.value })
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
              <form onSubmit={handleReg_2} onChange={onChangeSignUpBusiness}>
                <div className="user-details_reg">
                  <div className="input-box_reg">
                    <span className="details_reg">First Name</span>
                    <input type="text" name="firstname" placeholder="Enter your First name" />
                  </div>

                  <div className="input-box_reg">
                    <span className="details_reg">Last name</span>
                    <input type="text" name="lastname" placeholder="Enter your Last name" required />
                  </div>
                  {/* <div className="input-box_reg">
                    <span className="details">Username</span>
                    <input type="text" name="username" placeholder="Enter Username" required />
                  </div>
                  <div className="input-box_reg">
                    <span className="details">Password</span>
                    <input type="text" name="password" placeholder="Enter Password" required />
                  </div> */}
                  {/* <div className="input-box_reg">
                    <span className="details">Email</span>
                    <input type="text" name="email" placeholder="Enter Email" required />
                  </div> */}
                  <div className="input-box_reg">
                    <span className="details">Phone Number</span>
                    <input type="text" name="phoneNumber" placeholder="Enter your Phone Number" required />
                  </div>
                  <div className="input-box_reg" >
                    <span className="details">Usertype</span>
                    <select className="form-select" name = "usertype" defaultValue={usertype} onchange = {handleUsertype}aria-label="Default select example" required>
                      <option value="Farmer" name = "Farmer">Farmer</option>
                      <option value="Trader" name = "Trader">Trader</option>
                      <option value="Manufacturer" name = "Manufacturer">Manufacturer</option>
                      <option value="Wholesaler" name = "Wholesaler" >Wholesaler</option>
                      <option value="Retailer" name = "Retailer" >Retailer</option>
                    </select>
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

export default RegistrationBusiness