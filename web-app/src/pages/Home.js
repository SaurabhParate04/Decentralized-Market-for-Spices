import React from 'react'
import './Home.css'
import '../App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = (props) => {
    props.useScrollToTop();
    
    return (
        <div>
            <Navbar />
                        
            {/* <Footer />             */}
        </div>
    )
}

export default Home