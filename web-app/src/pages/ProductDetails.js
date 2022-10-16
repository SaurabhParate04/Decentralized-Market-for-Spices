import React from 'react'
import '../Styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import thumb from '../images/Cloves.jpg'

export default function ProductDetails(props) {

    // const id = props.location.state.id
    // const description = props.location.state.description
    // const title = props.location.state.title
    // const previousWork = props.location.state.previousWork
    // const goal = props.location.state.goal
    // const fundsRaised = props.location.state.fundsRaised
    // const city = props.location.state.city
    // const state = props.location.state.state
    // const cause = props.location.state.cause
    // const walletAddress = props.location.state.walletAddress
    // const isVerified = props.location.state.isVerified
    // const donationHistory = props.location.state.donationHistory

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <div>
            <Navbar/>

            <section className="section product-single extra-padding pb-0">
                <div className="container">

                <div className="row">
                    <div className="col-lg-4 col-md-5">

                        {/* <!-- Main Thumb --> */}
                        <div className="product-thumb">
                            <img src={thumb} alt="detail"></img>
                        </div>
                        {/* <!-- /Main Thumb --> */}

                    </div>
                    <div className="col-lg-8 col-md-7">
                        <div className="product-content">

                            {/* <!-- Product Title --> */}
                            <h2 className="title">Sesame Seeds</h2>
                            {/* <!-- /Product Title --> */}

                            {/* <!-- Rating --> */}
                            <div className="ct-rating-wrapper">
                                <div className="ct-rating">
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star active"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span>(24 ratings)</span>
                            </div>
                            {/* <!-- /Rating --> */}

                            {/* <!-- Price --> */}
                            <div className="price-wrapper">
                                <p className="product-price custom-secondary">$8.99 - 21.99$</p>
                            </div>
                            {/* <!-- /Price --> */}

                            {/* <!-- Product Short Description --> */}
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            {/* <!-- /Product Short Description --> */}

                            {/* <!-- Variations --> */}
                            <div className="product-variations-wrapper">
                                <div className="form-group">
                                    <label>Color</label>
                                    <select className="form-control">
                                        <option value="">Select a Color</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="red">Red</option>
                                        <option value="blue">Blue</option>
                                    </select>
                                </div>
                            </div>
                            {/* <!-- /Variations --> */}

                            {/* <!-- Add To Cart Form --> */}
                            <form className="atc-form" method="post">
                                <div className="form-group">
                                    <label>Quantity</label>
                                    <input type="number" className="qty form-control" name="quantity" value="1"></input>
                                </div>
                                <button type="submit" name="button" className="btn-custom secondary"> Add to Cart <i className="flaticon-shopping-basket"></i> </button>
                            </form>
                            {/* <!-- /Add To Cart Form --> */}

                            {/* <!-- Product Meta --> */}
                            <ul className="product-meta">
                                <li>
                                    <span>Categories: </span>
                                    <div className="product-meta-item">
                                        <a href="#">Utensils</a>
                                    </div>
                                </li>
                                <li>
                                    <span>Tags: </span>
                                    <div className="product-meta-item">
                                        <a href="#">Spice</a>,
                                        <a href="#">Spiceie</a>,
                                        <a href="#">Kitchen Ware</a>
                                    </div>
                                </li>
                                <li>
                                    <span>SKU: </span>
                                    <div className="product-meta-item">
                                        <span>N/A</span>
                                    </div>
                                </li>
                            </ul>
                            {/* <!-- /Product Meta --> */}
                        </div>
                    </div>
                </div>

                {/* <!-- Additional Information --> */}
                <div className="product-additional-info">
                    <ul className="nav" id="bordered-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="tab-product-desc-tab" data-toggle="pill" href="#tab-product-desc" role="tab" aria-controls="tab-product-desc" aria-selected="true">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="tab-product-info-tab" data-toggle="pill" href="#tab-product-info" role="tab" aria-controls="tab-product-info" aria-selected="false">Additional Information</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="tab-product-reviews-tab" data-toggle="pill" href="#tab-product-reviews" role="tab" aria-controls="tab-product-reviews" aria-selected="false">Reviews (25)</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="bordered-tabContent">
                        <div className="tab-pane fade show active" id="tab-product-desc" role="tabpanel" aria-labelledby="tab-product-desc-tab">
                            <h4>Description</h4>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Spice truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                            bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica
                        </div>
                        <div className="tab-pane fade" id="tab-product-info" role="tabpanel" aria-labelledby="tab-product-info-tab">
                            <h4>Additional Information</h4>

                            <table>
                                <thead>
                                    <tr>
                                    <th scope="col">Attributes</th>
                                    <th scope="col">Values</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td> <strong>Color</strong> </td>
                                    <td>blue, red, yellow, green</td>
                                    </tr>
                                    <tr>
                                    <td> <strong>Material</strong> </td>
                                    <td>wood, plastic, stainless steel</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="tab-pane fade" id="tab-product-reviews" role="tabpanel" aria-labelledby="tab-product-reviews-tab">
                            <h4>Leave a Review</h4>

                            <div className="ct-rating-wrapper">
                                <div className="ct-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span>Your Review</span>
                            </div>

                            {/* <!-- Review Form start --> */}
                            <div className="comment-form">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" className="form-control" placeholder="Full Name" name="fname" value=""></input>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="email" className="form-control" placeholder="Email Address" name="email" value=""></input>
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <textarea className="form-control" placeholder="Type your comment..." name="comment" rows="7"></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn-custom primary" name="button">Post Review</button>
                                </form>
                            </div>
                            {/* <!-- Review Form End --> */}

                            {/* <!-- Reviews Start --> */}
                            <div className="comments-list">
                                <ul>
                                    <li className="comment-item">
                                        <img src={thumb} alt="comment author"></img>
                                        <div className="comment-body">

                                            <h5>Heather Beirutus</h5>
                                            <div className="ct-rating">
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span>Posted on: September 13 2021</span>
                                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                                            <a href="#" className="reply-link"> Reply </a>
                                        </div>
                                    </li>
                                    <li className="comment-item">
                                        <img src={thumb} alt="comment author"></img>
                                        <div className="comment-body">
                                            <h5>Heather Beirutus</h5>
                                            <div className="ct-rating">
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                                <i className="fas fa-star active"></i>
                                            </div>
                                            <span>Posted on: September 13 2021</span>
                                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches</p>
                                            <a href="#" className="reply-link"> Reply </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Reviews End --> */}

                        </div>
                    </div>
                </div>
                {/* <!-- /Additional Information --> */}

                </div>
            </section>

            <Footer/>
        </div>
    )
}