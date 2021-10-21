import React from 'react';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
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
  textField: {
    border: '1px solid rgba(0,0,0,.3)',
    borderRadius: '2px',
    marginBottom: '10px',
    padding: '2px 15px',
  },
});

export default function RuggedPhones() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5">
        <span className={classes.line}>l</span>
        SUBSCRIBE TO OUR NEWS LETTER
      </Typography>
      <Grid container style={{height: '60vh', alignContent: 'center'}}>
        <Grid item md={4}></Grid>
        <Grid item container md={4} direction='column'>
            <InputBase
              variant='outlined'
              name='Email'
              placeholder='Enter your email address'
              color='secondary'
              className={classes.textField}
            />
            <Button variant='contained' color='primary'>
              Subscribe
            </Button>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </>
  );
}
