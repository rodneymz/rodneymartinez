import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: 0,
    position: 'relative',
    width: '100%',
    height: '50vh',
  },
  divs: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    display: 'flex',
    opacity: 0,
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      opacity: 1,
    },
  },
  overlayText: {
    margin: 0,
    fontWeight: 900,
    textAlign: 'center',
    maxWidth: '75%'
  },
  image: {
    height: '100%',
  }
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card 
    elevation={ 0 } 
    className={ classes.card } 
    >
      <div className={classes.divs}>
        <CardMedia className={classes.image} image={props.image}/>
      </div>
      <div className={`${classes.divs} ${classes.overlay}`}>
        <Typography className={classes.overlayText} variant="h2">
          { props.title }
        </Typography>
      </div>
    </Card>
  );
}