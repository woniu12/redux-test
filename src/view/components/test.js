import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from "@~/store/actionCreators"
import Btn from './btn'

class Test extends React.Component{
  constructor(props) {
    super(props)
  }

  handleClick  = () => {
    this.props.actions.decrement().then(res => {console.log()})
  }

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
          <button onClick={this.handleClick}>ownProps</button>
          {this.props.title}
        </div>
        <Btn></Btn>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    title: state.increment + ownProps.title
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
    ownPropsClick: () => {
      dispatch(actionCreators.increment())
      console.log(ownProps.title)
    }
  }
}
// mapDispatchToProps 也可以是一个对象
// const mapDispatchToProps = {
//   ownPropsClick: (filter) => {
//     return {
//       type: 'INCREMENT',
//       filter: filter
//     }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Test)