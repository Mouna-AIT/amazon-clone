import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function Banner() {
    return (
        <div className= 'relative'>
            <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000 }
            >
<div>
    <img loading= 'lazy' src='/bannerImage1.jpeg' alt='' />
    <img loading= 'lazy' src='/bannerImage2.jpeg' alt='' />
    <img loading= 'lazy' src='/bannerImage3.jpeg' alt='' />
</div>
<div></div>
<div></div>
            </Carousel>
        </div>
    )
}

export default Banner
