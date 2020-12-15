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



const useStyles = makeStyles({
    root: {
        fontSize: '40px',
        fontWeight: 600,
        marginTop: '8%',
        marginLeft: '130px',
        paddingTop: '60px',
      
    },

    ul: {

        margin: '50px 150px',
        listStyleType: 'circle',


    },

    li: {
        margin: '20px 0'
    },


    card:{
        maxWidth: 345,
        margin: '90px 190px',
        marginTop: '50px'
        
    }, 
    
    media: {
        height: 300,
        paddingTop: '100px'
        
    },

    p: {
        display:'block',
        width:'290px',
        fontSize:'15px'
    },
    title:{
           
        fontStyle: 'bold',
        fontFamily:'arial black'

    },
    message:{
        fontSize: '30px',
        fontWeight: 100,
        
        position:'relative',
        left:'650px',
        bottom:'550px'
    },
   
    descrip:{
        display:'block',
        width:'430px',
       
        fontSize:'12px',
        position:'relative',
        left:'650px',
        bottom:'550px'
    }



});

const Msg_fr_our_head = () => {

    const classes = useStyles();
    return (
        <Container>
            <Grid container>
                <Grid xs={12}>

                    <Grid >


                        <div style={{ background: '#eee', height: '50rem' }}>


                            <p className={classes.root}>Head-Deaprtment of CSE</p>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography className={classes.title} gutterBottom variant="h5" component="h1">
                                            MUSTAFA HASAN
                                       </Typography>
                                        <Typography className={classes.p} variant="body2" color="textSecondary" component="p">
                                            Harvard Business School, Bostom, USA
                                            Ph.D. , SKKU, Seoul, South Korea
                                            M.B.A. , Indiana University(Kelley School of Business), Bloomington, USA
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                               
                            </Card>


                            <Typography className={classes.message} gutterBottom variant="h5" component="h1">
                                            MESSAGE
                                       </Typography>
                                       <Typography className={classes.descrip}  variant="b" component="b">
                                       Welcome to Computer Science and Engineering (CSE) 
                                       department of Primeasia University. 
                                       The department has a strong base for 
                                       undergraduate education in computer science and
                                        engineering considering that scope of computer science and 
                                        engineering is very wide and expanding. 
                                        The fields of studies are basic science, mathematics, computer science and 
                                        engineering and general education courses. 
                                        The courses have been designed recognizing that computers 
                                        find application in every branch of knowledge.                                        
                                        During the course of study students will learn fundamental 
                                        principles of computer science and engineering, 
                                        acquire skill and apply their knowledge. 
                                        The department is very supportive to the needs of the students. 
                                        The department also focuses to expose students to 
                                        the fundamental of advanced knowledge in the fields of 
                                        artificial intelligence, machine learning, big data, robotics and 
                                        complex web applications tools and techniques. 
                                        We promote any sort of learning and 
                                        knowledge sharing events helpful to studies and career. 
                                        With this background our students are deservedly very competitive in industry, 
                                        teaching and higher studies.
                                       Overall we understand the need of each and every student and 
                                       we are here to help students towards accomplishment of 
                                       their educational objectives.
                                       </Typography>
                                       
                        </div>

                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Msg_fr_our_head