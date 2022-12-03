import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import "./Myorder.css"
import img from '../images/turmeric.jpg'

function Myorder(props) {
    // scroll to top on component render
    props.useScrollToTop();

    return (
        <div>
            <Navbar />

            <div className="h-100 gradient-custom" style={{marginTop:"100px"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-10 col-xl-8">
                            <div className="card my-order-card-container">
                                <div className="card-body p-4">
                                    <div className="card shadow-0 border mb-4">
                                        <div className="card-header my-order-top-card">
                                            <div className='row'>
                                                <div className='col-2'>
                                                    Order Placed
                                                    {/* <br></br> */}
                                                </div>
                                                <div className='col-6'>
                                                    Ship To
                                                </div>
                                                <div className='col-2'>
                                                    
                                                </div>
                                                <div className='col-2'>
                                                    Order#
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img src={img}
                                                        className="img-fluid" alt="Phone" />
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0">Nutmeg powder</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">United Spices</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    {/* <p className="text-muted mb-0 small">Capacity: 64GB</p> */}
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Qty: 150g</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Rs 150</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <div className="card shadow-0 border mb-4">
                                        <div className="card-header my-order-top-card">
                                            <div className='row'>
                                                <div className='col-2'>
                                                    Order Placed
                                                    {/* <br></br> */}
                                                </div>
                                                <div className='col-6'>
                                                    Ship To
                                                </div>
                                                <div className='col-2'>
                                                    
                                                </div>
                                                <div className='col-2'>
                                                    Order#
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img src={img}
                                                        className="img-fluid" alt="Phone" />
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0">Nutmeg powder</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">United Spices</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    {/* <p className="text-muted mb-0 small">Capacity: 64GB</p> */}
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Qty: 150g</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Rs 150</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <div className="card shadow-0 border mb-4">
                                        <div className="card-header my-order-top-card">
                                            <div className='row'>
                                                <div className='col-2'>
                                                    Order Placed
                                                    {/* <br></br> */}
                                                </div>
                                                <div className='col-6'>
                                                    Ship To
                                                </div>
                                                <div className='col-2'>
                                                    
                                                </div>
                                                <div className='col-2'>
                                                    Order#
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img src={img}
                                                        className="img-fluid" alt="Phone" />
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0">Nutmeg powder</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">United Spices</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    {/* <p className="text-muted mb-0 small">Capacity: 64GB</p> */}
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Qty: 150g</p>
                                                </div>
                                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                    <p className="text-muted mb-0 small">Rs 150</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Myorder