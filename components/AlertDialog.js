import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIconSharp from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
    },
    button: {
        borderRadius: 0,
        marginTop: 12,
        padding: '8px 20px',
        border: '2px solid',
        '&:hover': {
            border: '2px solid',
        }
    },
    dialogSpacing:{
        padding: '8px 24px'
    },
    dialogTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dialogHeading: {
        marginBottom: 0,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.secondary,
    },
    dialogButton: {
        borderRadius: 0,
        marginBottom: 12,
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    return (
        <div>
            <Button
                className={classes.button}
                color="primary"
                variant="outlined"
                onClick={handleClickOpen}
            >
                View Resume
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className={classes.dialogTitle} disableTypography>
                    <Typography className={classes.dialogHeading} variant="h4">
                        Resume coming soon!
                    </Typography>
                    <IconButton aria-label="close" color="secondary" className={classes.closeButton} onClick={handleClose}>
                        <CloseIconSharp />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Sorry for the inconvience. I'm in the process of updating my resume and it
                        should be available soon. In the meantime, feel free to contact me to learn more.
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.dialogSpacing}>
                    <Button className={classes.dialogButton} onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button className={classes.dialogButton} onClick={props.handleContact} color="primary">
                        Contact
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}