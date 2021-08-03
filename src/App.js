import './App.css';
import NavBar from './components/LandingComponents/NavBar';
import RuggedPhones from './components/LandingComponents/Rugged/RuggedPhones';
import SmartWatches from './components/LandingComponents/SmartWatches/SmartWatches';
import Subscribe from './components/LandingComponents/Subscribe';
import Footer from './components/LandingComponents/Footer';
import Slider from './components/LandingComponents/ImageCarousel/Slider';
import Carousel from './components/LandingComponents/Carousel/Carousel';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff'
    },
    orange: '#ff7f50'
  },
});

const images = [
  'https://www.doogee.cc/u_file/2106/photo/e84e0a52c3.png',
  'https://www.doogee.cc/u_file/2106/photo/56793928c7.png',
  'https://www.doogee.cc/u_file/2104/photo/1366fb53a0.png',
  'https://www.doogeephones.com/wp-content/uploads/2020/02/DOOGEE-S90-Pro-Rugged-Smart-phones-1.jpg'
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item>
          <Carousel />
        </Grid>
        <Grid item container style={{padding: '20px', justifyContent: 'center'}}>
          <Grid item xs={0} sm={2} md={.5}></Grid>
          <Grid item xs={12} sm={8} md={11}>
            <RuggedPhones />
            <SmartWatches/>
            <Subscribe />
          </Grid>
          <Grid item xs={0} sm={2} md={.5}></Grid>
        </Grid>
        <Footer /> 
      </Grid>
    </ThemeProvider>
  );
}

export default App;
