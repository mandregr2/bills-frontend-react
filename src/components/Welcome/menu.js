import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import Login from '../Login/index';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   maxWidth: 'sm',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
            <Button href="/Login" color="inherit" type="submit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

