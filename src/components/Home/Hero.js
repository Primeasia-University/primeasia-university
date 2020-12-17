import React from "react"
import { Container, Grid } from "@material-ui/core"
import "./Hero.css"

const Hero = () => {
  return (
    <Container>
      <Grid container>
        <Grid xs={12} md={8} style={{ textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/560x220"
            style={{ marginTop: 20, maxWidth: "100%" }}
            alt="placeholder"
          />
        </Grid>
        <Grid xs={12} md={4}>
          {/* --------------Notice-------------------- */}
          <div className="notice-borad">
            <h2>Notice</h2>
            <div className="scroller">
              <div className="single-notice-wrapper">
                <a href="/#">Graduate Admission Spring 2021</a>
                <p className="">22-12-2020</p>
              </div>
              <div className="single-notice-wrapper">
                <a href="/#">Graduate Admission Spring 2021</a>
                <p className="">22-12-2020</p>
              </div>
              <div className="single-notice-wrapper">
                <a href="/#">Graduate Admission Spring 2021</a>
                <p className="">22-12-2020</p>
              </div>
              <div className="single-notice-wrapper">
                <a href="/#">Graduate Admission Spring 2021</a>
                <p className="">22-12-2020</p>
              </div>
              <div className="single-notice-wrapper">
                <a href="/#">Graduate Admission Spring 2021</a>
                <p className="">22-12-2020</p>
              </div>
              <div className="single-notice-wrapper">
                <a href="/#">Graduate Admission Spring 2021</a>
                <p className="">22-12-2020</p>
              </div>
              <div className="single-notice-wrapper">
                <a href="/#">Graduate Admission Spring 2021</a>
                <p className="">22-12-2020</p>
              </div>
              <div className="single-notice-wrapper">
                <a href="/#">Graduate Admission Spring 2021</a>
                <p className="">22-12-2020</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
