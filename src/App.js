import React, { Component } from 'react';
import './App.css';
//Navigation
import Home from './components/pages/Test';
import PokeList from './components/pages/PokeList';
import Type from './components/pages/Type';
import {  HashRouter as Router, Route, Switch } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/PokeList' component={PokeList} />
          <Route exact path='/Type' component={Type} />
        </Switch>
      </Router>
    )
  }
}


export default App;
