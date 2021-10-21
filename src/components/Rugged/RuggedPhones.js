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

export default function RuggedPhones() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.iconsSection}>
        <Typography variant="h5">
          <span className={classes.line}>l</span>
          RUGGED PHONES
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
              imageSrc='https://www.doogee.cc/u_file/2103/photo/8a9d676181.jpg'
              description='Lorem ipsumon quis exercitationem culpa nesciunt nihil aut nostrum explicabo'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Cards
              title='DOOGEE S88'
              price='$230'
              imageSrc='https://www.doogee.cc/u_file/2106/products/21/b841d35d02.jpg'
              description='Lorem on quis exercitationem culpa nesciunt nihil aut nostrum explicabo'
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Cards
              title='DOOGEE S88'
              price='$230'
              imageSrc='https://www.doogee.cc/u_file/2104/photo/1366fb53a0.png'
              description='Lorem ipsum dolor sit amet, conl aut nostrum explicabo'
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}


