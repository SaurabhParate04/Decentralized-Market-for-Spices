import React, { useEffect } from 'react'
import '../Styles.css'
import Navbar from '../components/NavbarBusiness'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'


const HomeBusiness = (props) => {
    props.useScrollToTop();
    
    // useEffect (() =>{
    //     localStorage.removeItem('SpiceMarketBusinessjwtToken');
    //     localStorage.removeItem('SpiceMarketjwtToken');
    //     console.log("cleared")
    // });

    return (
        <div>
            <Navbar />

            <HomePage/>
                        
            <Footer />            
        </div>
    )
}

export default HomeBusiness