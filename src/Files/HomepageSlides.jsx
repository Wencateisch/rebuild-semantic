import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Images from '../Images/5 Types of Fundraising Sign Ups.png'
import Images2 from '../Images/TW_School_fundraising_graph3.jpg'
import Images3 from '../Images/best-fundraising-websites.jpeg'
import '../App.css'
import { Container } from 'semantic-ui-react';

const HomepageSlides = () => {
  return (
  <Container className='Home'>
    <Carousel axis='vertical' verticalSwipe='true' autoPlay={true} interval={3000} transitionTime={1000} infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
        <div><img src={Images} alt='logo' /></div>
        <div><img src={Images2} alt='logo'/></div>
        <div><img src={Images3} alt='logo'/></div>
        
    </Carousel>
  </Container>
    
  )
}

export default HomepageSlides