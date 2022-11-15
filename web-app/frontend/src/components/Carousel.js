import React from 'react'
import vid from '../images/video.mp4'
import img from '../images/Image.jpg'

export default function Carousel() {
    return (
        <div>
            <div id="videoDiv2">
                <video style={{width:"100%"}} preload="" autoplay="" muted="" playsinline="" loop="">
                    <source src={vid} type="video/mp4" />
                </video>
                <div id="videoMessage2" className="styling">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div id="videoMessage2" className="styling">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>


                    <div id="videoMessage2" className="styling">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            {/* <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Creativo</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
                    <div className="carousel-indicators">
                        <button aria-label="Slide 1" className="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img alt="..." className="d-block w-100" src="https://i.postimg.cc/LsTXqTNZ/1.jpg"/>
                                <div className="carousel-caption">
                                    <h5 className="animated bounceInRight" style="animation-delay: 1s">Web Design</h5>
                                    <p className="animated bounceInLeft d-none d-md-block" style="animation-delay: 2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                                    <p className="animated bounceInRight" style="animation-delay: 3s"><a href="#">Learn More</a></p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img alt="..." className="d-block w-100" src="https://i.postimg.cc/C1rx7Kyh/2.jpg"/>
                                <div className="carousel-caption">
                                    <h5 className="animated bounceInRight" style="animation-delay: 1s">Graphics Design</h5>
                                    <p className="animated bounceInLeft d-none d-md-block" style="animation-delay: 2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                                    <p className="animated bounceInRight" style="animation-delay: 3s"><a href="#">Learn More</a></p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img alt="..." className="d-block w-100" src="https://i.postimg.cc/c4nL7ZFW/3.jpg"/>
                                <div className="carousel-caption">
                                    <h5 className="animated bounceInRight" style="animation-delay: 1s">Photography</h5>
                                    <p className="animated bounceInLeft d-none d-md-block" style="animation-delay: 2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
                                    <p className="animated bounceInRight" style="animation-delay: 3s"><a href="#">Learn More</a></p>
                                </div>
                        </div>
                    </div><button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-prev-icon"></span> <span className="visually-hidden">Previous</span></button> <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" className="carousel-control-next-icon"></span> <span className="visually-hidden">Next</span></button>
                </div>
                
            </div> */}



        </div>
    )
}
