import { State } from './index';
import { combineReducers } from 'redux';
import * as fromProducts from './productReducer';
import * as fromUser from './userReducer';

export interface State {
  products:  fromProducts.State,
  user: fromUser.State
}

export const initialState: State = {
  products: fromProducts.initialState,
  user: fromUser.initialState
}

export const reducer = combineReducers<State>({
  products: fromProducts.reducer,
  user: fromUser.reducer
})