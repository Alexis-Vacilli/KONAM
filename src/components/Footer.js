import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  line: {
    backgroundColor: 'rgba(250,250,250,.6)',
    color: 'rgba(0,0,0,0)',
    width: '25px',
    height: '20px',
    marginRight: '6px',
  },

  list: {
    listStyle: 'none',
    padding: '5px 10px',
    color: 'white',
    fontFamily: 'arial',
    textAlign: 'center',
    padding: '10px',
    textDecoration: 'underlined'
    
  },
});

export default function RuggedPhones() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='space-around'
        style={{
          backgroundColor: 'rgb(17,33,45)',
          height: '50vh',
          padding: '30px',
          justifyContent: 'space-between'
        }}
      >
        {/* Row 1 */}
        <Grid item container>
          <Grid item md={4}>
            <Typography variant="h5" color="secondary">
              <span className={classes.line} >l</span>
              Contact Us
            </Typography>
          </Grid>
          <Grid item container md={4} spacing={2} style={{ justifyContent: 'center'}}>
            <Grid item><Typography color="secondary"><FacebookIcon /></Typography></Grid>
            <Grid item><Typography color="secondary"><TwitterIcon /></Typography></Grid>
            <Grid item><Typography color="secondary"><WhatsAppIcon /></Typography></Grid>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
        {/* Row 2 */}
        <Grid item container>
          <Grid item md={3} xs={0} style={{justifyContent: 'center'}}>
            <Typography style={{fontWeight: 'bold', textAlign: 'center'}} color="secondary">PRODUCTS AND SERVICES</Typography>
            <ul className={classes.list}>
              <li>Rugged Phones</li>
              <li>Smart Watches</li>
              <li>Accessories</li>
            </ul>
          </Grid>
          <Grid item md={3} xs={0}>
            <Typography style={{fontWeight: 'bold', textAlign: 'center'}} color="secondary">ASSISTANCE</Typography>
            <ul className={classes.list}>
              <li>Rugged Phones</li>
              <li>Smart Watches</li>
              <li>Accessories</li>
            </ul>
          </Grid>
          <Grid item md={3} xs={0}>
            <Typography style={{fontWeight: 'bold', textAlign: 'center'}} color="secondary">ABOUT DOOGEE</Typography>
            <ul className={classes.list}>
              <li>Rugged Phones</li>
              <li>Smart Watches</li>
              <li>Accessories</li>
            </ul>
          </Grid>
          <Grid item md={3} xs={0}>
            <Typography style={{fontWeight: 'bold', textAlign: 'center'}} color="secondary">BRAND</Typography>
            <ul className={classes.list}>
              <li>Rugged Phones</li>
              <li>Smart Watches</li>
              <li>Accessories</li>
            </ul>
          </Grid>
        </Grid>
        {/* Row 3 */}
        <Grid ite>
          <Typography style={{ textAlign: 'center' }} color="secondary">
            &copy;{new Date().getFullYear} KONAM Ltd | All rights reserved |
            Terms of services
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
