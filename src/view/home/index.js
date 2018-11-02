import React, { Component } from 'react'
import store from '../../store/store'
import * as actionTypes from "../../store/actionTypes";
import Test from '../components/test'

class Home extends Component {
  render () {
    return (
      <div>
        <Test
          increment={() => store.dispatch({type: actionTypes.INCREMENT})}
          decrement={() => store.dispatch({type: actionTypes.DECREMENT})}
        ></Test>
      </div>
    )
  }
}

export default Home