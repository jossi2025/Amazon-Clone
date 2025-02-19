import React from 'react'
import classes from './Carousel.module.css'
import {Carousel} from 'react-responsive-carousel'
import {img} from './images/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function CarouselEffect() {
    return (
    <div>
        <Carousel
        autoPlay={true}
        infiniteloop={true}
        showIndicators={false}
        showThumbs={false}
        >
            {
                img.map((imageItemLink,index)=>{
                    return <img key={index} src={imageItemLink}/>
                })
            }
        
        </Carousel>
        <div className={classes.hero__img}></div>
    </div>
    )
}

export default CarouselEffect