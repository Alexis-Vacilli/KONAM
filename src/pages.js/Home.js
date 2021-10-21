import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel/Carousel';
import RuggedPhones from '../components/Rugged/RuggedPhones';
import SmartWatches from '../components/SmartWatches/SmartWatches';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import { Grid, makeStyles, MenuList } from '@material-ui/core';


function Home() {
    return ( 
        <>
          <NavBar></NavBar>
          <Carousel></Carousel>
          <Grid container style={{padding: '15px', justifyContent: 'center'}}>
            <Grid item xs={0} sm={2} md={.5}></Grid>
            <Grid item xs={12} sm={8} md={11}>
                <RuggedPhones></RuggedPhones>
                <SmartWatches></SmartWatches>
                <Subscribe></Subscribe>
            </Grid>
            <Grid item xs={0} sm={2} md={.5}></Grid>
          </Grid>
          <Footer></Footer>
        </>
     );
}

export default Home;