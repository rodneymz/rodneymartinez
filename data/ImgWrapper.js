import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Styles
const useStyles = makeStyles(theme => ({
    image: {
        width: "100%",
        height: "auto",
        objectFit: "cover"
    },
}));

export const ImgWrapper = (props) => {
    const classes = useStyles();

    return (
        <img src={props.src} alt={props.alt} className={classes.image} />
    );
}