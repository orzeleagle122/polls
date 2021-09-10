import React from 'react';
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from "./styles";
import Button from '@material-ui/core/Button';

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.navbarWrapper}>
            <Toolbar variant="dense" className={classes.toolbar}>
                <Typography variant="h6" color="inherit" className={classes.webtitle}>
                    Create your questionnaire
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    className={classes.gridmenu}
                >
                    <Button className={classes.button}>Create fast poll</Button>
                    <Button className={classes.button}>Log in</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;