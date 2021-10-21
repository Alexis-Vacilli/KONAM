import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages.js/Home';
import Details from './pages.js/Details';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#11212F',
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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/' component={Details}/>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
