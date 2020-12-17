import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from '../../images/data_centre.png'


const useStyles = makeStyles({
    root: {
        maxWidth: 800,
        margin: '20px',
        "&:hover": {
            transform:"scale(1.1)",
            transition:'1s',
          },
       
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        
    },
    media: {
        height: 140,
    },
    colorContent:{
        background:'#843253',
        color:'white'
   
     },
});

const First_acheiv = () => {
    const classes = useStyles();
    return (
          <Container>

            


                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={Logo}
                            title="Contemplative Reptile"
                        />
                        <CardContent className={classes.colorContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.colorContent}> 
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
        </Button>
                        <Button size="small" color="primary">
                            Learn More
        </Button>
                    </CardActions>
                </Card>
          
          
            </Container>
    )
}
export default First_acheiv 