import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    introTitle: {
        position: "absolute",
        fontFamily: 'Inter',
        fontSize: "40px",
        fontStyle: "normal",
        height: "118px",
        width: "470px",
        left: "837px",
        top: "263px",

        lineHeight: "120%",
        letterSpacing: "-0.03em",
    },
    introDescription: {
        fontFamily: 'Inter',
        fontSize: "20px",
        position: "absolute",
        width: "429px",
        height: "96px",
        left: "829px",
        top: "410px",
        lineHeight: "160%",
        letterSpacing: "-0.03em"
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
