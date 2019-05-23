import { State } from '../reducers';
import { createSelector } from 'reselect';

/*
 * Get the todos state from the root state
 */

const getProductsState = ((state: State) => state.products);

const getUserState = ((state: State) => state.user);

/*
 * Getting todos array from todos State
 */

export const getProducts = createSelector([getProductsState], state => state.products);
export const getUser = createSelector([getUserState], state => state.user);