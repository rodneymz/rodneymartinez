import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Styles
const useStyles = makeStyles(theme => ({
    text: {
        // padding: 16,
        maxWidth: 650,
    },
    alignedRight: {
        textAlign: "right",
        // marginRight: "8.3333%",
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            margin: "0 auto",
        },
    },
    alignedLeft: {
        textAlign: "left",
        // marginLeft: "8.3333%",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            margin: "0 auto",
        },
    },
    alignedCenter: {
        textAlign: "center",
        margin: "0 auto",
    },
}));

export const CopyWrapper = (props) => {
    const classes = useStyles();
    let alignment = '';

    if (props.align === "right"){
        alignment = classes.alignedRight;
    } else if (props.align === "center"){
        alignment = classes.alignedCenter;
    } else {
        alignment = classes.alignedLeft;
    };

    return (
        <div className={`${classes.text} ${alignment}`}>{props.children}</div>
    );
}