import React from 'react'
import { Typography, Card, CardContent, CardMedia, Tabs, Tab, Button, AppBar, CssBaseline, Grid, Toolbar, Container, makeStyles } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/Build';
import LandingHeader from './components /LandingHeader';
import IntroSection from './components /IntroSection';



const App = () => {

    return (
        <div>
            <LandingHeader />
            <IntroSection />
        </div>

    );
}

export default App;