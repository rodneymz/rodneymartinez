import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import { Layout } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "72px",
  },
  bioPic: {
    width: "100%",
    paddingBottom: 20,
  },
  divider: {
    backgroundColor: "#EFEFEF",
    height: "2px",
    width: "100%",
    margin: "24px 0",
  },
  svg: {
    fill: "none",
    height: "20px",
    width: "20px",
  },
  social: {
    padding: 0,
    borderRadius: "50%",
    minWidth: 40,
    height: 40,
    backgroundColor: "#0073b1",
    "&:hover": {
      backgroundColor: "#0084bf",
    },
  },
  linkedIn: {
    fill: theme.palette.background.default,
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

export default function About(props) {
  const history = useHistory();
  const publicURL = process.env.PUBLIC_URL,
    assetsURL = "/assets/about/",
    classes = useStyles();

  const handleResume = () => {
    history.push("/resume");
  };

  return (
    <Layout>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12} sm={4} md={3}>
          <Grid container>
            <Grid item xs={12}>
              <img
                src={publicURL + assetsURL + "bio-pic.jpg"}
                alt="Rodney"
                className={classes.bioPic}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography color="secondary" variant="h6">
                Education
              </Typography>
              <Typography color="secondary" variant="body2">
                <strong>BFA – Film Production</strong>
                <br />
                University of Colorado – Denver
                <br />
                <br />
                <strong>Front-end Web Development</strong>
                <br />
                General Assembly
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Typography color="secondary" variant="h6">
            About Me
          </Typography>
          <Typography color="secondary" variant="body2">
            I’m a UX Designer with expertise in web/graphic design, front-end
            web development, and video/animation production. I currently work at
            Rocket Dollar, a fintech company based in Austin, Texas.
            <br />
            <br />
            Rocket Dollar builds streamlined processes for opening and
            administrating self-directed retirement accounts, along with
            investment management tools to help investors track the performance
            of their assets.
            <br />
            <br />
            At Rocket Dollar, I’ve been responsible for developing our brand
            along with the design system that accompanies it. Along with
            branding, I designed and developed our website, and have worked with
            our talented development team to design and develop our application.
            Lastly, I’ve worked with our executive and sales and marketing teams
            to craft some of our presentations, marketing materials, and videos.
            <br />
            <br />
            {/* My tenor at Rocket Dollar has been a humbling experience, I’m surrounded by some of the most talented people 
                    I’ve had the pleasure to work with. I can say I’m most proud of being able to watch our brand grow and influence 
                    the rest of the industry. The single best moment I’ve had has been watching our team win second place 
                    at the Money 2020 Startup Pitch in 2018, and knowing I contributed to the presentation that got us there. 
                    <br /><br /> */}
            Before Rocket Dollar, I was the Director of Account Management at
            BlueCheck, a digital age and identity verification company, the
            Community Development Manager at Candid.ly now Candidly.com, and a
            Techstars Associate at Techstars Austin.
            <br />
            <br />
            Outside of work you can find me cooking gourmet meals in my kitchen,
            practicing yoga, paddle boarding on Lake Austin, or spoiling my dog
            Bean.
          </Typography>
          <Grid item xs={6}>
            <Button color="primary" className={classes.button} onClick={handleResume} variant="outlined">
              View Resume
            </Button>
          </Grid>
          <div className={classes.divider}></div>
          <Grid container>
            <Typography color="secondary" variant="h6">
              Social
            </Typography>
            <Grid item xs={12} style={{ textAlign: "left" }}>
              <a
                href="https://www.linkedin.com/in/rodneyamartinez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="contained"
                  size="small"
                  aria-label="add"
                  className={classes.social}
                >
                  <svg
                    id="Brands"
                    className={classes.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                  >
                    <defs></defs>
                    <title>linkedin</title>
                    <g id="linkedin">
                      <rect width="25" height="25" />
                      <path
                        className={classes.linkedIn}
                        d="M7,22.5H2.83V9.15H7ZM4.9,7.33a2.42,2.42,0,0,1,0-4.83,2.42,2.42,0,0,1,0,4.83ZM22.5,22.5H18.36V16c0-1.55,0-3.54-2.16-3.54s-2.48,1.69-2.48,3.43V22.5H9.57V9.15h4V11h.06a4.34,4.34,0,0,1,3.92-2.16c4.2,0,5,2.77,5,6.35V22.5Z"
                      />
                    </g>
                  </svg>
                </Button>
              </a>
            </Grid>
          </Grid>
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
      </Grid>
    </Layout>
  );
}
