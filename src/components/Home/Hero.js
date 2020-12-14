import React from 'react';
import { Container, Grid } from '@material-ui/core';

const Hero = () => {
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
    </Container>
  )
}

export default Hero
