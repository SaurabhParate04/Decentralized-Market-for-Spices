import React from 'react'
import './Home.css'
import '../App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

const Home = (props) => {
    props.useScrollToTop();
    
    return (
        <div>
            <Navbar />

            <Carousel/>
                        
            <Footer />            
        </div>
    )
}

export default Home