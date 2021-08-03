import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    line: {
        backgroundColor: 'rgba(0,0,0,.6)',
        color: 'rgba(0,0,0,0)',
        width: '25px',
        height: '20px',
        marginRight: '6px',
      },
    
    //   iconsSection: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     padding: '20px 50px',
    //   },
      gridContainer: {
        padding: '20px 50px',
        justifyContent: 'space-between',
        height: '90%',
      },
      card: {
        backgroundColor: '#C4C4C4',
        padding: '10px',
        margin: '10px',
      },
      images: {
        width: '100%',
        height: '200px',
      },
});

export default function RuggedPhones() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.iconsSection}>
        <Typography variant="h5">
          <span className={classes.line}>l</span>
          ACCESSORIES
        </Typography>
      </div>
      {/* <Grid container className={classes.gridContainer}>
        <Grid item md={12}>
          <div className={classes.card}></div>
        </Grid>
        <Grid item md={4}>
          <div className={classes.card}>2</div>
        </Grid>
        <Grid item md={4}>
          <div className={classes.card}>3</div>
        </Grid>
        <Grid item md={4}>
          <div className={classes.card}>4</div>
        </Grid>
      </Grid> */}
    </>
  );
}
