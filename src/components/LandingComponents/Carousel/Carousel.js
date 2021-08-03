import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const useStyles = makeStyles({
  carousel: {
    width: '100%',
  },
  container: {
    height: '90vh',
    backgroundColor: '#333',
    padding: '100px 100px',
  },
  images: {
    height: '65%',
  },
  price: {
      color: '#FF6347'
  },
  CheckButton: {
      border: '2px',
      padding: '50px'
  },
});

export default function Example(props) {
  var items = [
    {
        
      image: 'https://www.doogee.cc/u_file/2104/photo/1366fb53a0.png',
      title: 'DOOGEE S88',
      subHeader: `The world's first rugged phone`,
      specs: 'Infrared Technology|128GB|8GB',
      price: '$340',
    },
    {
      image: 'https://www.doogee.cc/u_file/2104/photo/6494db607c.png',
      title: 'DOOGEE S88',
      subHeader: `The world's first rugged phone`,
      specs: 'Infrared Technology|128GB|8GB',
      price: '$340',
    },
    {
      image: 'https://www.doogee.cc/u_file/2104/photo/1366fb53a0.png',
      title: 'DOOGEE S88',
      subHeader: `The world's first rugged phone`,
      specs: 'Infrared Technology|128GB|8GB',
      price: '$340',
    },
  ];
  const classes = useStyles();
  return (
    <Carousel
      NextIcon={<NavigateNextIcon />}
      PrevIcon={<SkipPreviousIcon />}
      className={classes.carousel}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item container direction='column' spacing={2} xs={12} md={4} style={{}}>
        <Grid item md={2}>
          <Typography variant="h2" color="secondary" style={{fontWeight: 'bold'}}>{props.item.title}</Typography>
        </Grid>
        <Grid item >
        <Typography variant="h4" color="secondary" style={{fontWeight: '500'}}>{props.item.subHeader}</Typography>
        </Grid>
        <Grid item >
        <Typography variant="h6" color="secondary" style={{fontStyle: 'italic'}}>{props.item.specs}</Typography>
        </Grid>
        <Grid item >
            <Typography variant="h1" className={classes.price}>{props.item.price}</Typography>
        </Grid>
        <Grid item >
          <Button className='CheckButton' variant='outlined' color='secondary'>
            Learn More
          </Button>
        </Grid>
      </Grid>
      <Grid item md={3} className={classes.void}></Grid>
      <Grid item md={5}>
        <img src={props.item.image} alt='whatever' className={classes.images} />
      </Grid>
    </Grid>
  );
}
