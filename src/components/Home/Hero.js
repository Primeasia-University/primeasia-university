import React from "react"
import { Container, Grid } from "@material-ui/core"
import DateRangeIcon from "@material-ui/icons/DateRange"
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
              <p className="">
                <DateRangeIcon />
                <span className="notice-date">22-12-2020</span>
              </p>
            </div>
            <div className="single-notice-wrapper">
              <a href="#">
                RFID Card Distribution Schedule for Freshers:Fall 2021
              </a>
              <p className="">
                <DateRangeIcon />
                <span className="notice-date">29-12-2020</span>
              </p>
            </div>
            <div className="single-notice-wrapper">
              <a href="#">Orientation Package-Fall 2020</a>
              <p className="">
                <DateRangeIcon />
                <span className="notice-date">30-12-2020</span>
              </p>
            </div>
            <div className="view-all">
              <a href="all-notice"> » View All Notices «</a>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
