import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    fontSize: '40px',
    fontWeight: 600,
    marginTop: '8%',
    marginLeft: '130px',
    paddingTop: '100px'
  },

  ul: {

    margin: '50px 150px',
    listStyleType: 'circle',


  },

  li: {
    margin: '20px 0'
  },
  button: {

    marginLeft: '140px',
    backgroundColor: '#843253',
    color: 'white',
    width:100,
    "&:hover": {
      backgroundColor: "blue !important"
    }
    
  },

  
});

const Why_cse = () => {

  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid xs={6}>
          <div>
            <p className={classes.root}>Why CSE at Primeasia?</p>
            <ul className={classes.ul}>
              <li className={classes.li}>Understand our client's business goal first </li>
              <li className={classes.li}>Believe in doing business with honesty</li>
              <li className={classes.li}>We deliver on time</li>
              <li className={classes.li}>We create a winning content strategy</li>
              <li className={classes.li}>We project your online reputation</li>
            </ul>
            <Button href="https://www.primeasia.edu.bd/academics-courses?department=CSE" className={classes.button} >
              Link
            </Button>
          </div>
        </Grid>
        <Grid xs={6}>
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

export default Why_cse