import React from 'react'
import vid from '../images/video.mp4'
import img from '../images/Image.jpg'

export default function Carousel() {
    return (
        <div>
            <div id="videoDiv2">
                <video id="video2" preload="" autoplay="" muted="" playsinline="" loop="">
                    <source src={vid} type="video/mp4" />
                </video>
                <div id="videoMessage2" class="styling">
                    <h5>Fisrt slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div id="videoMessage2" class="styling">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>


                    <div id="videoMessage2" class="styling">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
