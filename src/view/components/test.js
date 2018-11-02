import React from 'react'
import store from '../../store/store'

const Test = (props) => {
  const { increment, decrement } = props
  return (
    <div>
      {store.getState()}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Test