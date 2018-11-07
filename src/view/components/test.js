import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from "../../store/actionCreators"

class Test extends React.Component{
  render () {
    const { increment, decrement } = this.props
    return (
      <div>
        <div>
          {this.props.state.increment}
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          {this.props.state.decrement}
        </div>
        <div>
          <button onClick={this.props.ownPropsClick}>ownProps</button>
        </div>
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
    actions: bindActionCreators(actionCreators, dispatch),
    ownPropsClick: () => {
      console.log(ownProps.title)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)