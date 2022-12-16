import React from 'react'
import '../Styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'

const Home = (props) => {
    props.useScrollToTop();
    
    return (
        <div>
            <Navbar />

            <HomePage/>

                        
            <Footer />            
        </div>
    )
}

export default Home