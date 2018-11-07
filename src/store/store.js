import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import * as reducers from './reducers'
import {createLogger} from 'redux-logger'
// import middlePromise from 'redux-promise'
import thunk from 'redux-thunk'

// 模拟 logger
const logger = store => next => action =>{
  console.log('prev state',store.getState())
  console.log('dispatch',action);

  let result = next(action);

  console.log('next state',store.getState());

  return new Promise((resolve, reject) => {
    resolve(result)
  });
}

const  reducer = combineReducers(reducers)

const  store = createStore(reducer, compose(applyMiddleware(thunk, logger)))

export default store