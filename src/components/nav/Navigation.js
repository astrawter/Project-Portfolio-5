import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import Logo from "../logo.png";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navSpace: {
    padding: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "6%"
    }
  },
  bar: {
    [theme.breakpoints.down("sm")]: {
      background: "#222224"
    }
  },
  hide: {
    marginLeft: "1rem",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  hideSm: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  nl: {
    color: "#f0f0f0",
    marginLeft: "15%",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: theme.spacing(0.5)
  },
  logo: {
    paddingTop: theme.spacing(1.375),
    width: "20%",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "40%"
    }
  },
  link: {
    color: "#222224",
    textDecoration: "none"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar color="default" className={classes.bar} position="static">
        <Toolbar disableGutters={true}>
          <Grid container>
            <Grid item={true} xs={6} className={classes.hide}>
              <IconButton
                aria-controls="menu-appbar"
                onClick={handleMenu}
                edge="start"
                color="primary"
                aria-label="menu"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink to="/PokeList" className={classes.link}>
                    PokeList
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink to="/Type" className={classes.link}>
                    By Type
                  </NavLink>
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item={true} md={2} xs={1} className={classes.hideSm}>
              <Typography variant="h6" className={classes.navSpace}>
                <NavLink to="/PokeList" className={classes.nl}>
                  PokeList
                </NavLink>
              </Typography>
            </Grid>
            <Grid item={true} md={2} xs={1} className={classes.hideSm}>
              <Typography variant="h6" className={classes.navSpace}>
                <NavLink to="/Type" className={classes.nl}>
                  By Type
                </NavLink>
              </Typography>
            </Grid>
            <Grid
              item={true}
              md={8}
              xs={5}
              className={classes.navSpace}
              style={{ padding: 0, marginLeft: 0, textAlign: "right" }}
            >
              <img src={Logo} alt="PokeFind" className={classes.logo} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
