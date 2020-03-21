import React, { Component } from 'react';
import './App.css';
//Navigation
import Home from './components/pages/Home';
import PokeList from './components/pages/PokeList';
import Type from './components/pages/Type';
import {  HashRouter as Router, Route, Switch } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

//Theme
const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#ee1515',
          light: '#f14343',
          dark: '#a60e0e'
        },
        secondary: {
          main: '#240048',
          light: '#340068',
          dark: '#5c3386'
        },
    },
    typography: {
      fontFamily: [
        '"Nova Square"',
      ].join(','),
      fontSize: 12,
    },
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/PokeList' component={PokeList} />
          <Route exact path='/Type' component={Type} />
        </Switch>
      </MuiThemeProvider>
      </Router>
    )
  }
}


export default App;
