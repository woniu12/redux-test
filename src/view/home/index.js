import React, { Component } from 'react'
// import store from '../../store/store'
// import * as actionTypes from "../../store/actionTypes";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/actionCreators'
import Test from '../components/test'

class Home extends Component {
  render () {
    return (
      <div>
        <Test
          increment={() => this.props.actions.increment()}
          decrement={() => this.props.actions.decrement()}
          title="title"
        ></Test>
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