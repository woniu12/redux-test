import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import Test from '../test/test'
import store from '../../store/store'
import * as actionTypes from '../../store/actionTypes'
import Home from '../home/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to woniu12</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Test
          value={store.getState()}
          increment={() => store.dispatch({type: actionTypes.INCREMENT})}
          decrement={() => store.dispatch({type: actionTypes.DECREMENT})}
        ></Test>
        <Home></Home>
      </div>
    )
  }
}

export default App;
