
import React from "react";
import { Container, Grid } from "@material-ui/core";
import Slider from "react-slick";

import slider1 from "../../images/slider-1.png"
import slider2 from "../../images/slider-20.jpg"
import slider3 from "../../images/slider-22.jpg"
import slider4 from "../../images/slider-23.jpg"

const images = [slider1, slider2, slider3, slider4]

const Hero = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    draggable: false,
    dots: true,
    pauseOnFocus: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Container className="slider">
      <Grid container style={{margin: '2.5rem 0 0rem'}}>
        <Grid xs={12}>
          <Slider {...settings}>
            {
              images.map(image => (
                <div>
                  <img src={image} alt="Slider" style={{width: '100%'}}/>
                </div>
              ))
            }
          </Slider>
        </Grid>

        <h1 className={classes.title}>Achievements</h1>

       
      </Grid>


      <div style={{background: '#eee' ,width:'100%', margin:'20px auto'}}>
      <Grid container spacing={2} className={classes.gridContainer}>

      
     
           <Grid item xs={12} sm={6} md={4}>
           <First_acheiv/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
           <First_acheiv/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
           <First_acheiv/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
           <First_acheiv/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
           <First_acheiv/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
           <First_acheiv/>
           </Grid>
           
          
        </Grid>
        </div>
    </Container>
  )
}

export default Hero
