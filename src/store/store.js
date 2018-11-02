import { applyMiddleware, createStore, compose } from 'redux'
import reducers from './reducers'
import {createLogger} from 'redux-logger'
import middlePromise from 'redux-promise'
// import thunk from 'redux-thunk'
const logger = store => next => action =>{
  console.log('prev state',store.getState())
  console.log('dispatch',action);

  let result = next(action);

  console.log('next state',store.getState());

  return result;
}

const  store = createStore(reducers, compose(applyMiddleware(middlePromise, logger)))

export default store