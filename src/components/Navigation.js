import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item="item" xl={2}>
              <Typography variant="h6">
                <NavLink to="/">Home</NavLink>
              </Typography>
            </Grid>
            <Grid item="item" xl={2}>
              <Typography variant="h6">
                <NavLink to="/PokeList">PokeList</NavLink>
              </Typography>
            </Grid>
            <Grid item="item" xl={2}>
              <Typography variant="h6">
                <NavLink to="/Type">By Type</NavLink>
              </Typography>
            </Grid>
            <Grid item="item" xl={1}></Grid>
            <Grid item="item" xl={5}></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
