import * as actionTypes from './actionTypes'

export const increment = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1
    default:
      return state
  }
}

export const decrement = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.DECREMENT:
      return state -1
    default:
      return state
  }
}