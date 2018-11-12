import React, {Component} from 'react'
import porpTypes from 'prop-types'

class Btn extends Component {
  render () {
    return (
      <button style={{'background':this.context.color}}>{this.context.title}</button>
    )
  }
}

Btn.contextTypes = {
  title: porpTypes.string,
  color: porpTypes.string
}

export default Btn