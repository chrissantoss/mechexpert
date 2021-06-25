import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#4C11F2',
    fontFamily: 'Inter',
    fontSize: 30,
  },
  navBarText: {
    fontFamily: 'Inter',
    fontSize: 14,
  }
}));

export default function LandingHeader() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar />
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          MechExpert
        </Typography>

        <Button className={classes.navBarText}>Crash Course</Button>
        <Button className={classes.navBarText}>Quiz Types</Button>
        <Button className={classes.navBarText}>Interviews</Button>
        <Button className={classes.navBarText}>Discussion</Button>
        {auth && (
          <Button>Sign In</Button>
        )}
      </Toolbar>
    </div>
  );
}