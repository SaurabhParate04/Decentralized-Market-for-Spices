import React, {useState} from 'react'
import userContext from './userContext'

const UserState = ({children}) => {
    
    //state used for 2 step registration / signup
    const [globalCredentials, setglobalCredentials] = useState({email:"", username:"", password:"", rpassword:"", addressl1:"", addressl2:"", landmark:"", pincode:"", firstname:"", lastname:"", phoneno:"", usertype:""});

    //global login state
    const [loggedIn, setloggedIn] = useState(localStorage.getItem('SpiceMarketjwtToken') ? true :false);

    //global state for storing profile info, to display userinfo and edit profile
    const [userProfile, setuserProfile] = useState({email:"",username:"", firstname:"", lastname:"", phoneno:"", addressl1:"", addressl2:"", landmark:"", pincode:"",  usertype:""});

    //gets userInfo
    const getProfileInfo = async() =>{
        try {
            const url = "http://localhost:5000/api/user/fetchuser";

            //generate fetch request to get user info for the profile
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                    'auth-token':localStorage.getItem('SpiceMarketjwtToken')
                }
            });

            //converting to json format
            const json = await response.json();

            //setting user profile state
            setuserProfile(json)
            
        } catch (error) {
            console.error(error.message);
            console.log('error occured in getprofileinfo');
        }
    }

    const logOutUser = ()=>{
        localStorage.removeItem('SpiceMarketjwtToken');
        setloggedIn(false);
        setuserProfile("")
    }
            
    return (
        <userContext.Provider value={{globalCredentials, setglobalCredentials, loggedIn, setloggedIn, getProfileInfo, userProfile, setuserProfile, logOutUser}} >
            {children}
        </userContext.Provider>
    )
}

export default UserState
