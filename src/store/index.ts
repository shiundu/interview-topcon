import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { State, reducer, initialState } from '../reducers'

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
const store = createStore<State, any, any, any>(reducer, initialState, applyMiddleware(logger, thunk))

export default store