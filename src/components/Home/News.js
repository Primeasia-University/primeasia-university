import React from "react"
import Slider from "react-slick"
import { Container, Grid } from "@material-ui/core"

import classes from "./News.module.css"

const news = [
  {
    content: 'Primeasia ranked top private university in QS rankings',
    date: 'Oct 24, 2018'
  },
  {
    content: 'B.Sc in CSE & B.Sc in EEE Achieve IEB Accreditation',
    date: 'Oct 03, 2016'
  },
  {
    content: 'OPPORTUNITY TO CLEAR ‘I’ GRADE IN THE RUNNING FALL 2020 SEMESTER',
    date: 'Dec 15, 2020'
  },
  {
    content: 'Extension of Last Date for Payment of 2nd Installment of Tuition Fees (Fall 2020)',
    date: 'Dec 13, 2020'
  },
  {
    content: 'Mid-Term Assessment Schedule - Fall 2020',
    date: 'Nov 23, 2020'
  },
  {
    content: 'Webinar on Managing assessments during pandemics and Creating interactive resources to keep students engaged',
    date: 'Oct 03, 2016'
  },
  {
    content: '100% TUITION FEE WAIVER UNDER FREEDOM FIGHTERS’ CHILDREN QUOTA',
    date: 'Nov 08, 2020'
  },
]

const News = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    draggable: false,
    pauseOnFocus: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className={classes.news}>
      <Container fluid>
        <Grid container alignItems="center">
          <Grid item xs={2} className={classes.heading}>
            <h4 className={classes.subtitle}>TOP</h4>
            <h2 className={classes.title}>NEWS</h2>
          </Grid>
          <Grid item xs={10}>
            <Slider {...settings}>
              {
                news.map(article => (
                  <div className={classes.article}>
                    <p className={classes.articleContent}>{article.content}</p>
                    <h6 className={classes.articleDate}>{article.date}</h6>
                  </div>
                ))
              }
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default News
