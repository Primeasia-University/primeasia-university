import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Notice from './Notice';


const useStyles = makeStyles({
  root: {
    fontSize: '40px',
    fontWeight: 600,
    // marginTop: '8%',
    // marginLeft: '130px',
    // paddingTop: '100px'
  },
  ul: {
    margin: '3rem 0',
    listStyleType: 'circle',
  },
  li: {
    margin: '1rem 4rem 0'
  },
  button: {
    backgroundColor: '#843253',
    color: 'white',
    fontSize: '1.4rem',
    margin: '1rem 2rem',
    padding: '1rem 3rem',
    "&:hover": {
      backgroundColor: "blue !important"
    }
  },
});

const Why_cse = () => {

  const classes = useStyles();
  return (
    <div style={{margin: '5rem 0 10rem'}}>
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
                Our Courses
              </Button>
            </div>
          </Grid>
          <Grid xs={6}>
            <Notice/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Why_cse