import React, { Component } from "react";
import "./App.css";
//Navigation
import PokeList from "./components/pages/PokeList";
import Type from "./components/pages/Type";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

//Theme
const theme = createMuiTheme({
  palette: {
    background: {
      default: "#ee1515"
    },
    primary: {
      main: "#f0f0f0",
      light: "#f3f3f3",
      dark: "#a8a8a8"
    },
    secondary: {
      main: "#222224",
      light: "#4e4e4f",
      dark: "#171719"
    }
  },
  typography: {
    fontFamily: ['"Nova Square"']
  },
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: "transparent"
      }
    },
    MuiCardContent: {
      root: {
        padding: 0
      }
    },
    MuiAppBar: {
      colorDefault: {
        background:
          "linear-gradient(90deg, rgba(238,21,21,1) 0%, rgba(238,21,21,1) 40%, rgba(34,34,36,1) 40%, rgba(34,34,36,1) 63%, rgba(240,240,240,1) 63%, rgba(240,240,240,1) 100%)"
      }
    },
    MuiSelect: {
      filled: {
        backgroundColor: "#f0f0f0",
        "&:focus": {
          backgroundColor: "#f0f0f0",
          color: "#222224"
        }
      }
    }
    //End overrides
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={PokeList} />
            <Route exact path="/Type" component={Type} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
