import React from 'react';
import { Carousel } from "react-bootstrap";
import sliderImage1 from "../../assets/images/slider/img-1.jpg";
import sliderImage2 from "../../assets/images/slider/img-2.jpg";
import sliderImage3 from "../../assets/images/slider/img-3.jpg";

import "../Banner/banner.css";

const Banner = () => {
  return (
   <>
    <section className='slider'>
    <Carousel  variant="dark ">

      <Carousel.Item>
        <img src={sliderImage1} className='d-block w-100' alt="First slide" />
        <Carousel.Caption>
        <div className='slider_des'>
        <h5 className='heading'>JOURNEY TO <span>EXPLORE WORLD</span></h5>
        <p className='sub_text'>Traveling is more than just exploring new destinations; it is a profound journey of self-discovery and spiritual awakening.ancient temples, or a quiet mountain village.</p>
        </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sliderImage2} className='d-block w-100' alt="second slide" />
        <Carousel.Caption>
        <div className='slider_des'>
        <h5 className='heading'>BEAUTIFUL PLACE <span>TO VISIT</span></h5>
        <p className='sub_text'>Exploring beautiful destinations is more than just sightseeing; it's about experiencing the magic and wonder each place holds. From majestic mountains and stunning coastlines to vibrant cities and tranquil villages, each destination offers something unique.</p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sliderImage3} className='d-block w-100' alt="third slide" />
        <Carousel.Caption>
        <div className='slider_des'>
        <h5 className='heading'>JOURNEY TO <span>EXPLORE WORLD</span></h5>
          <p>
          Traveling is more than just visiting new places; it's a journey of self-discovery. Stepping out of our daily routines, we experience the beauty of nature and the warmth of different cultures. Each place we visit offers a chance to find peace, understand our shared humanity, and discover a deeper meaning in life. In every new experience, we learn more about ourselves, making travel a truly enriching experience for the soul
          </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
   </>
  )
}

export default Banner
