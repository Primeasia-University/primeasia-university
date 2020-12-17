import React from 'react';
import { Container, Grid } from '@material-ui/core';
import First_acheiv from './../Home/first_acheiv';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  gridContainer: {

    paddingLeft: '40px',
    paddingRight: '40px',
    marginBottom:'500px'
   
   
   },
   title:{
         
    fontSize: '40px',
    fontWeight: 600,
    marginLeft:'500px',
    marginTop:'50px',
  
    
    
    
  }

});



const Hero = () => {
  const classes = useStyles();
  return (
    <Container> 
      <Grid container>
        <Grid xs={7}>
          {/* --------------Slider-------------------- */}
          <div style={{background: '#eee', height: '50rem'}}></div>
        </Grid>
        <Grid xs={7}>
          {/* --------------Notice-------------------- */}
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
