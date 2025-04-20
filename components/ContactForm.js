import React from 'react';
import { apiPost } from '../functions/api';
import { Data as ContactFields } from '../data/ContactForm';

import { Typography, Grid, TextField, Button } from '@material-ui/core';
import Alert from './Alert';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '72px',
    },
    form: {
        marginTop: '32px',
    },
    textField: {
        '& fieldset': {
            borderRadius: '0',
        },
    },
    hidden: {
        display: "none",
    },
    button: {
        borderRadius: '0',
        padding: '8px 20px',
        border: '2px solid',
        '&:hover': {
            border: '2px solid',
        }
    }
}));

const initialState = {
    alertDisabled: true,
    alertMessage: '',
    alertStatus: '',
    company: '',
    email: '',
    firstName: '',
    lastName: '',
    message: '',
}

export default function ContactForm() {
    const classes = useStyles();
    const [state, setState] = React.useState(initialState);

    const handleChange = e => {
        setState({ ...state, [e.target.id]: e.target.value });
    }
    const alertClose = () => {
        setState({ ...state, alertDisabled: true });
    }

    const handleSubmit = e => {
        e.preventDefault();
        apiPost('/contact-form', {
            email: state.email,
            first_name: state.firstName,
            last_name: state.lastName,
            company: state.company,
            message: state.message,
        }).then(({ data }) => {
            console.log(data);
            setState({ ...state, alertDisabled: false, alertMessage: data.message, alertStatus: 'success' });
        });
    }

        return (
            <div className={ classes.root }>
                <Alert alertClose={alertClose} disabled={state.alertDisabled} message={state.alertMessage} status={state.alertStatus} />
                <Typography color="secondary" variant="h6" >
                    Let's work together!
                </Typography>
                <Typography color="secondary" variant="body1" >
                    Tell me a little more about yourself and your project.
                </Typography>
                <form name="My Website Form" className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {ContactFields.map(({ gridWidth, id, label, multiline, name, rows, required, type }, i) =>
                            <Grid item
                                xs={gridWidth ? gridWidth : 12}
                                key={i}
                            >
                                <TextField
                                    className={classes.textField}
                                    fullWidth
                                    id={id}
                                    label={label}
                                    multiline={multiline}
                                    name={name}
                                    onChange={handleChange}
                                    rows={rows}
                                    required={required}
                                    type={type}
                                    value={state[id]}
                                />
                            </Grid>
                        )}
                        <Grid item xs={4}>
                            <Button
                                className={classes.button}
                                type="submit"
                                variant="outlined"
                                color="primary"
                                fullWidth={true}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );

}