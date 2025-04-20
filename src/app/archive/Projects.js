import React from "react";
import { useParams } from "react-router-dom";
import { AppContext } from '../providers/AppContext';

import { makeStyles } from "@material-ui/styles";

import { Grid, Button } from "@material-ui/core";

import { Layout } from "../components"

// Styles
const usestyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "56px",
  },
  container: {
    justifyContent: "center",
  },
  gridItem: {
    maxWidth: 480,
    maxHeight: "auto",
  },
  placeholder: {
    backgroundColor: "#efefef",
    width: "100%",
    height: "100%",
  },
  button: {
    margin: "48px 0 48px",
    borderRadius: "0",
    border: "2px solid",
    "&:hover": {
      border: "2px solid",
    },
  },
}));

const scrollTop = () => {
  // temporary fix for scroll top not supported on
  // edge, explorer, and mobile safari
  window.scrollTo(0, 0);
};

let initialState = {
  initialRender: true,
  Project: null,
  isValid: {},
};

export default function Projects(props) {
  const classes = usestyles();
  let { link } = useParams();
  const { appState } = React.useContext(AppContext);
  const [state, setState] = React.useState(initialState);
  const Project = state.Project;

  const GetElementType = (elementType, image, copy) => {
    if (elementType === "image") {
      return <>{image.wrapper}</>;
    } else if (elementType === "copy") {
      return <>{copy.wrapper}</>;
    } else if (elementType === "space") {
      return <div className={`${classes.placeholder} space`}></div>;
    } else {
      return <div> Element to be rendered not defined. </div>;
    }
  }

  React.useEffect(() => {
      if (state.initialRender === true ) {
          switch (link) {
              // creating a new contact
              case undefined:
                  props.history.push('/not-found');
                  break;
              // editing an existing contact
              default:
                  //if project link is a valid then set to respective project from appstate
                  const isValidProject = appState.find(obj => obj.link === `/${link}`);
                  // reset initial state set project to validated project for handleCancel form reset
                  initialState = {...initialState, Project: isValidProject};
                  // update state with validated project
                  setState({ ...state, initialRender: false, Project: isValidProject });
                  break;
          }
      }
  }, [ appState, link, props, setState, state ]);

  return (
    <Layout>
      <Grid container className={classes.container} spacing={2}>
        {Project && Project.gridTiles.map(({ cols, copy,  elementType, image }, i) => (
          <Grid
            item
            className={classes.gridItem}
            xs={cols.xs}
            sm={cols.sm}
            md={cols.md}
            lg={cols.lg}
            key={i}
          >
            {GetElementType(elementType, image, copy)}
          </Grid>
        ))}
      </Grid>
      <Button
        className={classes.button}
        onClick={scrollTop}
        color="primary"
        variant="outlined"
      >
        Back to Top
      </Button>
    </Layout>
  );
}
