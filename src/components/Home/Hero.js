import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Achiv from './Achiv';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    
    gridContainer:{
      paddingLeft:'20px',
      paddingRight:'20px',
      margin: '20px',
     
      
    },

    title:{
         
      fontSize: '40px',
      fontWeight: 600,
      marginLeft:'400px',
      marginTop:'50px',
      
      
    }
  

  
})


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

          
          
      </Grid>

      <Grid container spacing={1} className={classes.gridContainer}>

        
           <div style={{background: '#eee', width:'100%'}}>

           <h1 className={classes.title}>Achievements</h1>
           {/*....Acheivment... */}

         
        <Grid item xm={12}  sm={6}>
           <Achiv/>

        </Grid>
        <Grid  item xm={12} sm={6} >
           <Achiv/>

        </Grid>
        <Grid item xm={12} sm={6} >
           <Achiv/>

        </Grid>
        <Grid item xm={12} sm={6} >
           <Achiv/>

        </Grid>
        <Grid item xm={12} sm={6} >
           <Achiv/>

        </Grid>
        <Grid item xm={12}  sm={6}>
           <Achiv/>

        </Grid>
        
        
        </div>
        
      </Grid>
    </Container>
  )
}

export default Hero
