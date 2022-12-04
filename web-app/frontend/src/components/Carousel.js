import React from 'react'
import vid from '../images/video.mp4'
// import img from '../images/Image.jpg'

export default function Carousel() {
    return (
        <div>
            {/* <div id="videoDiv2">
                <video style={{ width: "100%" }} preload="" autoplay="" muted="" playsinline="" loop="">
                    <source src={vid} type="video/mp4" />
                </video>
            </div> */}
            <div className="banner banner-video dark-overlay">
                <video autoplay="" muted="" loop="" id="myVideo">
                    <source src={vid} type="video/mp4" />
                </video>
                {/* <!-- Prev Arrow --> */}
                <i className="slider-prev fas fa-arrow-left slick-arrow" style={{}}></i>
                <div className="container">

                    <div className="banner-slider slick-initialized slick-slider">
                        <div className="slick-list draggable slider-text"><div className="slick-track"><div className="banner-item text-center slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{ width: "690px" }}>
                            <div className="banner-inner">
                                <h1 className="title text-white"><span className="custom-primary">Spices </span> From Authentic Source , Grab It</h1>
                                <p className="subtitle text-white">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak</p>
                                <a href="\" className="btn-custom primary shadow-none" tabindex="-1">Visit My Blog <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div><div className="banner-item text-center slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{ width: "690px" }}>
                                <div className="banner-inner">
                                    <h1 className="title text-white">Spices Brings Taste To Your   <span className="custom-primary"> Kitchen </span> </h1>
                                    <p className="subtitle text-white">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak</p>
                                    <a href="\" className="btn-custom primary shadow-none" tabindex="0">Visit Spices Bazzar <i className="fas fa-arrow-right"></i> </a>
                                </div>
                            </div><div className="banner-item text-center slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style={{ width: "690px" }}>
                                <div className="banner-inner">
                                    <h1 className="title text-white">Get All  <span className="custom-primary"> Spices </span> Here </h1>
                                    <p className="subtitle text-white">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak</p>
                                    <a href="\" className="btn-custom primary shadow-none" tabindex="-1">Contact Me <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div><div className="banner-item text-center slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style={{ width: "690px" }}>
                                <div className="banner-inner">
                                    <h1 className="title text-white"><span className="custom-primary">Spices </span> From Authentic Source , Grab It</h1>
                                    <p className="subtitle text-white">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak</p>
                                    <a href="\" className="btn-custom primary shadow-none" tabindex="-1">Visit My Blog <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div><div className="banner-item text-center slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabindex="-1" style={{ width: "690px" }}>
                                <div className="banner-inner">
                                    <h1 className="title text-white">Spices Brings Taste To Your   <span className="custom-primary"> Kitchen </span> </h1>
                                    <p className="subtitle text-white">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak</p>
                                    <a href="\" className="btn-custom primary shadow-none" tabindex="-1">Visit Spices Bazzar <i className="fas fa-arrow-right"></i> </a>
                                </div>
                            </div><div className="banner-item text-center slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabindex="-1" style={{ width: "690px" }}>
                                <div className="banner-inner">
                                    <h1 className="title text-white">Get All  <span className="custom-primary"> Spices </span> Here </h1>
                                    <p className="subtitle text-white">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak</p>
                                    <a href="\" className="btn-custom primary shadow-none" tabindex="-1">Contact Me <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div><div className="banner-item text-center slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style={{ width: "690px" }}>
                                <div className="banner-inner">
                                    <h1 className="title text-white"><span className="custom-primary">Spices </span> From Authentic Source , Grab It</h1>
                                    <p className="subtitle text-white">Bacon ipsum dolor amet ball tip pork chop cow tenderloin andouille. Pastrami pork picanha tongue venison strip steak</p>
                                    <a href="\" className="btn-custom primary shadow-none" tabindex="-1">Visit My Blog <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        </div>


                    </div>

                </div>
                {/* <!-- Next Arrow --> */}
                <i className="slider-next fas fa-arrow-right slick-arrow" style={{}}></i>
            </div>
        </div>
    )
}
