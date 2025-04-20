import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'

import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#FFFFFF',
        display: 'flex',
        flexFlow: 'row wrap',
        marginBottom: 20,
    },
    error: {
        backgroundColor: 'red',
    },
    message: {
        flexGrow: 1,
        lineHeight: '24px',
        margin: 0,
        padding: 12,
    },
    close: {
        color: '#FFFFFF',
    },
    success: {
        backgroundColor: 'green',
    },
}));

export default function Alert(props) {
    const { alertClose, disabled, message, status } = props;
    const classes = useStyles();

    return (
        <>
            {disabled === false &&
                <div className={`${classes.root} ${classes[status]}`}>
                    <Typography className={classes.message}>{message}</Typography>
                    <IconButton>
                        <CloseIcon className={classes.close} onClick={alertClose}/>
                    </IconButton>
                </div>
            }
        </>
    )
}

Alert.propTypes = {
    alertMessage: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    status: PropTypes.string,
}