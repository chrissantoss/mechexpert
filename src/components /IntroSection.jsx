import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    introTitle: {
        fontFamily: 'Semi Bold',
        fontSize: 40,
        height: 118,
        width: 470,
        left: 837
    },
    introDescription: {
        fontFamily: 'Inter',
        fontSize: 14,
    },
    createAccountButton: {
        fontFamily: 'Source Sans Pro',
    }
}));

export default function IntroSection() {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.introTitle}>Learn how to solve various mechanical engineering problems</Typography>
            <Typography className={classes.introDescription}>MechExpert provides you with the tools to help you succeed while strengthening your skills</Typography>
            <Button color='primary' style={{ textTransform: 'none' }} className={classes.createAccountButton}>Create Account</Button>
        </div>
    )
}
