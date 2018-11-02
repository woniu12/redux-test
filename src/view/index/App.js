import React, { Component } from 'react';
import './App.css';
import Home from '../home/index'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to redux test</h1>
        </header>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
