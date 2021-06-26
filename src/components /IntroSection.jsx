import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    introTitle: {
        fontFamily: 'Semi Bold',
        fontSize: 40,
    },
    introDescription: {
        fontFamily: 'Inter',
        fontSize: 14,
    }
}));

export default function IntroSection() {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.introTitle}>Learn how to solve various mechanical engineering problems</Typography>
            {/* <Typography className={classes.introDescription}>MechExpert provides you with the tools to help you succeed while strengthening your skills</Typography> */}
        </div>
    )
}
