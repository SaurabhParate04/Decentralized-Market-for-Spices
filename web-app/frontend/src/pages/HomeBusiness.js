import React from 'react'
import '../Styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeBusiness = (props) => {
    props.useScrollToTop();
    
    return (
        <div>
            <Navbar />
                        
            <Footer />            
        </div>
    )
}

export default HomeBusiness