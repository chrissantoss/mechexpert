import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    descriptionCard: {
        width: "50%"
    },
}));

export default function WhatIsMechExpert() {
    const classes = useStyles();
    return (
        <div>
            <Typography>
                What is MechExpert?
            </Typography>
            <p>A platform to improve your interviewing skills</p>
            <Card className={classes.descriptionCard}>
                <CardContent>
                    <Typography>Crash Courses</Typography>
                    <Typography>Materials, MODS, various hardware-related questions from a question bank of high-level engineering problems from the world's biggest companies</Typography>
                </CardContent>
            </Card>
            <Card className={classes.descriptionCard}>
                <CardContent>
                    <Typography>Crash Courses</Typography>
                    <Typography>Materials, MODS, various hardware-related questions from a question bank of high-level engineering problems from the world's biggest companies</Typography>
                </CardContent>
            </Card>
            <Card className={classes.descriptionCard}>
                <CardContent>
                    <Typography>Crash Courses</Typography>
                    <Typography>Materials, MODS, various hardware-related questions from a question bank of high-level engineering problems from the world's biggest companies</Typography>
                </CardContent>
            </Card>
        </div>
    )
}
