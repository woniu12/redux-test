import React, { Component } from 'react'
import store from '../../store/store'
import * as actionTypes from "../../store/actionTypes";
import Test from '../components/test'

class Home extends Component {
  handleClick = () => {
    store.dispatch({type: actionTypes.INCREMENT}).then(res => {
      console.log(11111111)
    })
    console.log(2222)
  }
  render () {
    return (
      <div>
        <Test
          increment={() => store.dispatch({type: actionTypes.INCREMENT})}
          decrement={() => store.dispatch({type: actionTypes.DECREMENT})}
        ></Test>
        <div onClick={this.handleClick}>异步的</div>
      </div>
    )
  }
}

export default Home