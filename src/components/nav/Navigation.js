import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import Logo from "../logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navSpace: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  nl: {
    color: "#f0f0f0",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: theme.spacing(0.5)
  },
  logo: {
    paddingTop: theme.spacing(1.375),
    width: "30%",
    marginRight: theme.spacing(2)
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar disableGutters={true}>
          <Grid container>
            <Grid item={true} md={2} xs={12}>
              <Typography
                color="textPrimary"
                variant="h6"
                className={classes.navSpace}
              >
                <NavLink to="/" className={classes.nl}>
                  Home
                </NavLink>
              </Typography>
            </Grid>
            <Grid item={true} md={3} xs={12}>
              <Typography variant="h6" className={classes.navSpace}>
                <NavLink to="/PokeList" className={classes.nl}>
                  PokeList
                </NavLink>
              </Typography>
            </Grid>
            <Grid item={true} md={2} xs={12}>
              <Typography
                variant="h6"
                className={classes.navSpace}
                style={{ marginLeft: "16px" }}
              >
                <NavLink to="/Type" className={classes.nl}>
                  By Type
                </NavLink>
              </Typography>
            </Grid>
            <Grid
              item={true}
              md={5}
              xs={12}
              className={classes.navSpace}
              style={{ padding: 0, textAlign: "right" }}
            >
              <img src={Logo} alt="PokeFind" className={classes.logo} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
