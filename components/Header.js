import React from 'react';
import { NavLink as NavigationLink, Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Link
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    textAlign: "right",
  },
  titleLink: {
    fontWeight: 700,
    textDecoration: 'none',
    '&:hover': {
      color: '#00000025',
      textDecoration: 'none',
    },
  },
  navLink: {
    marginRight: theme.spacing(2),
    fontWeight: 700,
    textDecoration: 'none',
    '&.active': {
      boxShadow: '0 3px 0 0 red'
    },
    '&:hover': {
      color: '#00000025',
      textDecoration: 'none',
      boxShadow: '0 3px 0 0 red'
    },
  },
}));

const TitleLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
const NavLink = React.forwardRef((props, ref) => <NavigationLink innerRef={ref} {...props} />);

export default function Header() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <AppBar id="top" elevation={0} position="static" color="inherit">
        <Toolbar disableGutters={true}>
          <Grid
            container
            spacing={0}
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <Typography color="secondary" variant="h4" className={classes.title}>
              <Link component={TitleLink} className={classes.titleLink} color="secondary" to="/">Rodney Martinez</Link>
              </Typography>
            </Grid>
            <Grid item xs>
              <div className={classes.nav}>
                <Link component={NavLink} className={classes.navLink} color="secondary" exact to="/">Work</Link>
                <Link component={NavLink} className={classes.navLink} color="secondary" to="/about">About</Link>
                <Link component={NavLink} className={classes.navLink} color="secondary" to="/contact">Contact</Link>
                <Link component={NavLink} className={classes.navLink} color="secondary" to="/resume">Resume</Link>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}