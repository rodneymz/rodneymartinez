import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../providers/AppContext';

import { Grid, Button } from '@material-ui/core';
import { Layout, ProjectCard } from '../components'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '72px'
  },
  button: {
    margin: "48px 0 48px",
    borderRadius: '0',
    border: '2px solid',
    '&:hover': {
      border: '2px solid',
    }
  },
}));

const scrollTop = () => {
  // temporary fix for scroll top not supported on 
  // edge, explorer, and mobile safari
  window.scrollTo(0, 0);
}

export default function Home(props) {
  const classes = useStyles();
  const { appState } = React.useContext(AppContext);

  return (
    <Layout title={props.title}>
      <Grid
        container
        spacing={4}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        {/* Contact input fields */}
        {appState.map(({ title, link, mainImage }, i) => (
          <Grid key={i} item xs={12} sm={12} md={6}>
            <Link to={link}>
              <ProjectCard title={title} image={mainImage} />
            </Link>
          </Grid>
        ))}
        <Grid container style={{ justifyContent: "center" }}>
          <Button
            className={classes.button}
            onClick={scrollTop}
            color="primary"
            variant="outlined"
          >
            Back to Top
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
}
