import React, { Component } from 'react'

class Test extends Component {
  render () {
    const { value, increment, decrement } = this.props
    return (
      <div>
        {value}
        <a href="sms:13520502497?body=你好！">发送信息</a>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <Btn title={this.props.value} />
      </div>
    )
  }
}

function Btn (props) {
  return (
    <button>{props.title}</button>
  )
}

export default Test