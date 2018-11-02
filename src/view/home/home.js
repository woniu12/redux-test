import React, { Component } from 'react'
import store from '../../store/store'

class Home extends Component {
  render () {
    return (
      <div>
        {store.getState()}
      </div>
    )
  }
}

export default Home