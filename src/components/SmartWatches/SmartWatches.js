import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Cards from './Cards';

const useStyles = makeStyles({
  line: {
    backgroundColor: 'rgba(0,0,0,.6)',
    color: 'rgba(0,0,0,0)',
    width: '25px',
    height: '20px',
    marginRight: '6px',
  },
});

export default function RuggedPhones(props) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography variant="h5">
          <span className={classes.line}>l</span>
          SMART WATCHES
        </Typography>
      </div>
      <Grid container direction='column'>
        <Grid item md={12}>
          
        </Grid>
        <Grid item container md={12} spacing={6} style={{padding: '30px 0px', width: '100%'}}>
          <Grid item xs={12} sm={4} md={4}>
            <Cards
              title='DOOGEE S88'
              price='$230'
              imageSrc='https://www.doogee.cc/static/themes/default/images/index/cs2pro-top_323.jpg'
              description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Cards
              title='DOOGEE S88'
              price='$230'
              imageSrc='https://www.doogee.cc/static/themes/default/images/index/band-top_323.jpg'
              description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Cards
              title='DOOGEE S88'
              price='$230'
              imageSrc='https://www.doogee.cc/static/themes/default/images/index/cr1-top_323.jpg'
              description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem'
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
