import React from 'react'
import { Typography, Card, CardContent, CardMedia, Tabs, Tab, Button, AppBar, CssBaseline, Grid, Toolbar, Container, makeStyles } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/Build';
import LandingHeader from './components /LandingHeader';
import IntroSection from './components /IntroSection';
import WhatIsMechExpert from './components /WhatIsMechExpert';



const App = () => {

    return (
        <div>
            <LandingHeader />
            <IntroSection />
            <WhatIsMechExpert />
        </div>

    );
}

export default App;