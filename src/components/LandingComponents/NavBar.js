import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Menu from '@material-ui/icons/Menu';
import { Grid, makeStyles, MenuList } from '@material-ui/core';

// Styles
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function NavBar() {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.target);
  };

  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar className={classes.bar} color='secondary'>
        <Toolbar>
          <Typography>KONAM</Typography>
          <Grid container>
            <Grid item md={8} style={{ marginLeft: '30px' }}>
              <Tabs
                onChange={handleClickTab}
                indicatorColor='primary'
                value={value}
                className={classes.tabs}
              >
                <Tab
                  label='Mobile'
                  aria-controls='menu'
                  onMouseOver={handleOpenMenu}
                />
                <Tab label='Accessories' />
                <Tab label='Smart watch' />
              </Tabs>
            </Grid>
          </Grid>
          <Grid item container md={5} spacing={2}>
            <Grid item>
              <Button variant='contained' color='primary'>
                Explore
              </Button>
            </Grid>
            <Grid item>
              <Button color='primary'>Assistance</Button>
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={2}
            spacing={1}
            style={{ justifyContent: 'flex-end' }}
          >
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item>
              <PermIdentityIcon aria-controls="menu" onMouseOver={handleOpenMenu}  />
            </Grid>
            <Grid item>
              <ShoppingCartOutlinedIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Menu id='menu' anchorEl={anchorEl} open={Boolean(anchorEl)}>
        <MenuList>My Account</MenuList>
        <MenuList>Logout</MenuList>
      </Menu>
    </>
  );
}
