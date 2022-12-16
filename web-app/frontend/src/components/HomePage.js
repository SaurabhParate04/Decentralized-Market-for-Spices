import React from 'react'
import vid from '../images/video.mp4'
// import img from '../images/Image.jpg'

export default function HomePage() {
    return (
        <div className="Start">
            <div className="first">
                <div className="banner banner-video dark-overlay">
                    <video autoplay="" muted loop id="myVideo">
                        <source src={vid} type="video/mp4" />
                    </video>

                    <div className="banner-inner">
                        <h1 className="title text-white">Spices Brings Taste To Your   <span className="custom-primary"> Kitchen </span> </h1>
                        <p className="subtitle text-white">Use spices for flavor in food rather than adding a bunch of oils, fats, or sauces.</p>
                    </div>


                </div>
            </div>

            <div className="second">
                <section className="section about-sec style-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-wrapper">
                                    <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/about-1.jpg" alt="image" />
                                    <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/about-2.jpg" className="image-2 parallax_scroll_down" alt="image" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="section-title-wrap">
                                    <h2 className="title">We Have  <span className="custom-primary">Wide Varity </span> Of Spices </h2>
                                    <h3 className="subtitle">We Provide The Best Spices in The Market.</h3>
                                    <p className="subtitle mb-0" style={{fontWeight:"500"}}>
                                        Spice is life. It depends upon what you like... have fun with it. Yes, food is serious, but you should have fun with it.
                                    </p>
                                </div>
                                <div className="about-content">
                                    <div className="row align-items-center">
                                        <div className="col-sm-6">
                                            <ul>
                                                <li>
                                                    <span className="check">
                                                        <i className="fas fa-check"></i>
                                                    </span>
                                                    Variety is the Spices of Love.
                                                </li>
                                                <li>
                                                    <span className="check">
                                                        <i className="fas fa-check"></i>
                                                    </span>
                                                    Spice Up Your Life.
                                                </li>
                                                <li>
                                                    <span className="check">
                                                        <i className="fas fa-check"></i>
                                                    </span>
                                                    Eat Good Feel.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="experience-box">
                                                <span className="text">
                                                    Since <br />
                                                    2022
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="third">
                <section className="section-home why-us-2 dark-overlay dark-overlay-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="section-title-wrap">
                                    <h2 className="title text-white mb-0">High Quality  <span className="custom-primary">Spices </span> And Delievery Services </h2>
                                    <div className="d-flex align-items-center mt-5">
                                        <span className="icon" style={{marginBottom:"100px"}}>
                                            <i className="fab fa-whatsapp"></i>
                                        </span>
                                        <div className="contact-info mx-4">
                                            <span>b.tech@gmail.com</span>
                                            <h4>(+91)789 675 098</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="fourth">
                <div className="progress-icon section pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 ">
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-wrapper">
                                    <div className="row no-gutters">
                                        <div className="col-lg-6 icon-col">
                                            <div className="icon-box">
                                                <span className="icon">
                                                    <i class="fa-solid fa-people-roof"></i>
                                                </span>
                                                <div className="icon-descr">
                                                    <h3>200+</h3>
                                                    <h4>Happy Clients</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 icon-col">
                                            <div className="icon-box">
                                                <span className="icon">
                                                    <i class="fa-solid fa-award"></i>
                                                </span>
                                                <div className="icon-descr">
                                                    <h3>60+</h3>
                                                    <h4>Awards Won</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 icon-col">
                                            <div className="icon-box">
                                                <span className="icon">
                                                    <i class="fa-solid fa-pepper-hot"></i>
                                                </span>
                                                <div className="icon-descr">
                                                    <h3>150+</h3>
                                                    <h4>Spices</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 icon-col">
                                            <div className="icon-box">
                                                <span className="icon">
                                                <i class="fa-solid fa-users"></i>
                                                </span>
                                                <div className="icon-descr">
                                                    <h3>40+</h3>
                                                    <h4>Members</h4>
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
            <div className="fifth">
                <section className="section video-style-1 bg-cover bg-center dark-overlay dark-overlay-2" style={{ backgroundImage: "url('http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/video.jpg')" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="video-player-trigger">
                                <a href="/">
                                    <i className="fas fa-play"></i>
                                </a>
                            </div>
                            <div className="col-lg-8 text-center">
                                <h3>Getting Started With Masala</h3>
                                <p>Variety's the very spice of life, That gives it all its flavor.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div><div className="sixth">
                <section className="section section-padding-home posts">
                    <div className="container " style={{ maxWidth: "1300px" }}>
                        <div className="section-title-wrap section-header">
                            <h2 className="title">Blog </h2>
                            <p className="subtitle"style={{fontWeight:"500"}}>
                                Usual three flavour masalas
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <article className="post">
                                            <div className="post-thumbnail">
                                                <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/1.jpg" alt="blog post" />
                                                <div className="post-meta">
                                                    <span>September 22, 2021</span>
                                                    <span>Posted by Jonathan Pick</span>
                                                </div>
                                            </div>
                                            <div className="post-categories">
                                                <a href="#">Agro</a>
                                            </div>
                                            <div className="post-body">
                                                <h5 className="post-title"> <a href="blog-single-v1.html">Glass container for masalas</a> </h5>
                                                <p className="post-text" style={{fontWeight:"500"}}>
                                                Thinly slicing even the bulkiest vegetables, like cauliflower, broccoli, brussels sprouts, or cabbage, then aggressively cooking them in a hot skillet and finishing with a shower of spices means they cook and develop flavor super quickly.
                                                </p>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <article className="post">
                                            <div className="post-thumbnail">
                                                <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/9.jpg" alt="blog post" />
                                                <div className="post-meta">
                                                    <span>April 26, 2021</span>
                                                    <span>Posted by Jonathan Pick</span>
                                                </div>
                                            </div>
                                            <div className="post-categories">
                                                <a href="#">Seasonal Agro</a>
                                            </div>
                                            <div className="post-body">
                                                <h5 className="post-title"> <a href="blog-single-v1.html">Agriculture </a> </h5>
                                                <p className="post-text"style={{fontWeight:"500"}}>Whilst I love Indian food, when I think of Indian food I think spices, tangy and zing</p>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <article className="post">
                                            <div className="post-thumbnail">
                                                <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/4.jpg" alt="blog post" />
                                                <div className="post-meta">
                                                    <span>April 26, 2021</span>
                                                    <span>Posted by Jonathan Pick</span>
                                                </div>
                                            </div>
                                            <div className="post-categories">
                                                <a href="#">Lunch</a>
                                            </div>
                                            <div className="post-body">
                                                <h5 className="post-title"> <a href="blog-single-v1.html">Organic Green Bell Pepper</a> </h5>
                                                <p className="post-text"style={{fontWeight:"500"}}>A good spice often deceives us into thinking that someone is a good cook</p>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-12">
                                        <article className="post post-format-video">
                                            <div className="post-thumbnail">
                                                <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/3.jpg" alt="blog post" />
                                                <div className="post-meta">
                                                    <span>September 22, 2021</span>
                                                    <span>Posted by Jonathan Pick</span>
                                                </div>
                                            </div>
                                            <div className="post-categories">
                                                <a href="#">How-To</a>
                                                <a href="#">Agro</a>
                                            </div>
                                            <div className="post-body">
                                                <h5 className="post-title"> <a href="blog-single-v1.html">Fresh Organic Mustard Leaves</a> </h5>
                                                <p className="post-text"style={{fontWeight:"500"}}>The right amount and quality of spices and herbs can transform our cooking into something amazing. Warm greetings on Herbs and Spices Day to you.</p>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <article className="post">
                                            <div className="post-thumbnail">

                                                <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/9.jpg" alt="blog post" />

                                                <div className="post-meta">
                                                    <span>April 26, 2021</span>
                                                    <span>Posted by Jonathan Pick</span>
                                                </div>
                                            </div>
                                            <div className="post-categories">
                                                <a href="#">Seasonal Agro</a>
                                            </div>
                                            <div className="post-body">
                                                <h5 className="post-title"> <a href="blog-single-v1.html">Medium Rare Steak with Grilled Spicy &amp; Herbs</a> </h5>
                                                <p className="post-text"style={{fontWeight:"500"}}>Herbs and spices are not just limited to our food but they also come with various benefits to our health. Wishing a very Happy Herbs and Spices Day to you.</p>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <article className="post">
                                            <div className="post-thumbnail">
                                                <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/10.jpg" alt="blog post" />
                                                <div className="post-meta">
                                                    <span>April 26, 2021</span>
                                                    <span>Posted by Jonathan Pick</span>
                                                </div>
                                            </div>
                                            <div className="post-categories">
                                                <a href="#">Lunch</a>
                                            </div>
                                            <div className="post-body">
                                                <h5 className="post-title"> <a href="blog-single-v1.html">Generic</a> </h5>
                                                <p className="post-text"style={{fontWeight:"500"}}>The occasion of Herbs and Spices Day reminds us about the importance of spices and herbs into our lives as well as cooking. Warm wishes on this special day to all.</p>
                                            </div>
                                        </article>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar">
                                    <div className="sidebar-widget-home">
                                        <h5>Recent Posts</h5>
                                        <article className="media">
                                            <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/10.jpg" alt="post" />
                                            <div className="media-body">
                                                <h6> <a href="blog-single-v1.html">Generic</a> </h6>
                                                <p>September 22, 2021</p>
                                            </div>
                                        </article>
                                        <article className="media">
                                            <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/4.jpg" alt="post" />
                                            <div className="media-body">
                                                <h6> <a href="blog-single-v1.html">Awesome Wheats</a> </h6>
                                                <p>September 24, 2021</p>
                                            </div>
                                        </article>
                                        <article className="media">
                                            <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/7.jpg" alt="post" />
                                            <div className="media-body">
                                                <h6> <a href="blog-single-v1.html">Turmeric</a> </h6>
                                                <p>September 26, 2021</p>
                                            </div>
                                        </article>
                                        <article className="media">
                                            <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/5.jpg" alt="post" />
                                            <div className="media-body">
                                                <h6> <a href="blog-single-v1.html">Agriculture</a> </h6>
                                                <p>September 28, 2021</p>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="sidebar-widget">
                                        <h5>Featured Spicess</h5>
                                        <div className="recipe featured-recipe">
                                            <div className="recipe-thumbnail">

                                                <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/7.jpg" alt="blog post" />

                                            </div>
                                            <div className="recipe-body">
                                                <h6 className="recipe-title"> <a href="recipe-details.html">Turmeric and Raspberries</a> </h6>
                                                <div className="recipe-meta">
                                                    <div className="recipe-difficulty">
                                                        <div className="recipe-difficulty-inner">
                                                            <span className="active"></span>
                                                            <span className="active"></span>
                                                            <span></span>
                                                        </div>
                                                        <span>Home Cook</span>
                                                    </div>
                                                    <div className="recipe-steps">
                                                        <span><i className="fas fa-concierge-bell"></i> 24 Items</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="recipe featured-recipe">
                                            <div className="recipe-thumbnail">

                                                <img src="http://metropolitanhost.com/themes/templatemoster/html/masala/assets/img/blog/11.jpg" alt="blog post" />

                                            </div>
                                            <div className="recipe-body">
                                                <h6 className="recipe-title"> <a href="recipe-details.html">Pepper</a> </h6>
                                                <div className="recipe-meta">
                                                    <div className="recipe-difficulty">
                                                        <div className="recipe-difficulty-inner">
                                                            <span className="active"></span>
                                                            <span></span>
                                                            <span></span>
                                                        </div>
                                                        <span>Amateur</span>
                                                    </div>
                                                    <div className="recipe-steps">
                                                        <span><i className="fas fa-concierge-bell"></i> 13 Items</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>


    )
}
