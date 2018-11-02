import * as actionTypes from './actionTypes'

export default (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1
    case actionTypes.DECREMENT:
      return state -1
    default:
      return state
  }
}

// export const todo = (state = '', action) => {
//   switch (action.type) {
//     case "HELLO":
//       return action.text
//     default:
//       return state
//   }
// }