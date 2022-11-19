import React, {useState} from 'react'
import BusinessUserContext from './BusinessUserContext'

const BusinessUserState = ({children}) => {
    
    //state used for 2 step registration / signup
    const [globalBusinessCredentials, setglobalBusinessCredentials] = useState({email:"", username:"", password:"", rpassword:"", addressl1:"", addressl2:"", landmark:"", pincode:"", firstname:"", lastname:"", phoneno:"", usertype:""});

    //global login state
    const [loggedInBusiness, setloggedInBusiness] = useState(localStorage.getItem('SpiceMarketBusinessjwtToken') ? true :false);

    //global state for storing profile info, to display userinfo and edit profile
    const [userProfileBusiness, setuserProfileBusiness] = useState({email:"",username:"", firstname:"", lastname:"", phoneno:"", addressl1:"", addressl2:"", landmark:"", pincode:"",  usertype:""});

    const[notifications, setNotifications] = useState([])

    //gets userInfo
    const getBusinessProfileInfo = async() =>{
        try {
            const url = "http://localhost:5000/api/businessuser/fetchuser";

            //generate fetch request to get user info for the profile
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                    'auth-token':localStorage.getItem('SpiceMarketBusinessjwtToken')
                }
            });

            //converting to json format
            const json = await response.json();

            //setting user profile state
            setuserProfileBusiness(json)
            console.log(json)
        } catch (error) {
            console.error(error.message);
            console.log('error occured in getBusinessProfileInfo');
        }
    }

    const logOutUser = ()=>{
        localStorage.removeItem('SpiceMarketBusinessjwtToken');
        setloggedInBusiness(false);
        setuserProfileBusiness("")
    }

    const getNotifications = async() => {
        try {
            // console.log(userProfileBusiness._id)
            const url = "http://localhost:5000/api/agroproductnotify/fetchnotifications";
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                    'receiver': userProfileBusiness._id
                },
            });
            let res = await response.json();
            // res = JSON.stringify(res)
            // console.log(res)
            // res = JSON.parse(res)
            // res = JSON.stringify(res[0]['userCart'])
            // console.log("getcartinfo: " + res)
            // res = JSON.parse(res)
            setNotifications(res)

        } catch (error) {
            console.error(error.message);
            console.log('error occured in getNotifications');
        }
    }
            
    return (
        <BusinessUserContext.Provider value={{globalBusinessCredentials, setglobalBusinessCredentials, loggedInBusiness, setloggedInBusiness, getBusinessProfileInfo, userProfileBusiness, setuserProfileBusiness, logOutUser, getNotifications, notifications}} >
            {children}
        </BusinessUserContext.Provider>
    )
}

export default BusinessUserState
