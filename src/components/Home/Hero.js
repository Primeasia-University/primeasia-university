import React from "react";
import { Container, Grid } from "@material-ui/core";
import Slider from "react-slick";
import classes from "./Hero.module.css";

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
                  <img src={image} alt="Slider" className={classes.sliderImage}/>
                </div>
              ))
            }
          </Slider>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
