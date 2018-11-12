import React, { Component } from 'react'
// import store from '../../store/store'
// import * as actionTypes from "../../store/actionTypes";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/actionCreators'
import Test from '../components/test'

import propTypes from 'prop-types'

class Home extends Component {

  // context 示例
  static childContextTypes = {
    title: propTypes.string,
    color: propTypes.string
  }
  getChildContext () {
    return {
      title: 'hello',
      color: 'red'
    }
  }
  handleClick = () => {

  }
  render () {
    return (
      <div>
        <Test
          increment={() => this.props.actions.increment()}
          decrement={() => this.props.actions.decrement()}
          title="title"
        ></Test>
        <button onClick={this.handleClick}>背景色</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)