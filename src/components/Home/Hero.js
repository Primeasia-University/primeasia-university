import React from "react"
import { Container, Grid } from "@material-ui/core"
import "./Hero.css"

const Hero = () => {
  return (
    <Container>
      <Grid container>
        <Grid xs={7}>{/* --------------Slider-------------------- */}</Grid>
        <Grid xs={5}>

          {/* --------------Notice-------------------- */}
          <div className="notice-borad">
            <h2>Notice</h2>
            <div className="single-notice-wrapper">
              <a href="#">Graduate Admission Spring 2021</a>
              <p className="">22-12-2020</p>
            </div>
            <div className="single-notice-wrapper">
              <a href="#">Graduate Admission Spring 2021</a>
              <p className="">22-12-2020</p>
            </div>
            <div className="single-notice-wrapper">
              <a href="#">Graduate Admission Spring 2021</a>
              <p className="">22-12-2020</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
