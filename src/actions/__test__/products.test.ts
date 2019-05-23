import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ActionTypes } from '../types';
import * as actions from '../products';
import { initialState } from '.././../reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({...initialState});


describe('Products async actions', () => {

  it('it should dispatch INITIAL_PRODUCT_LIST', () => {

        const expectedActions = [{
            type: ActionTypes.INITIAL_PRODUCT_LIST,
            payload: {
                products: []
            }
        }];

        return store.dispatch(actions.initialProductList()).then(() => {
            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action);
            
            expect(actionTypes).toEqual(expectedActions);
        });
  });

  it('it should dispatch ADD_PRODUCT', () => {
        const product = { 
            id: 3, 
            name: 'product', 
            price: '45', 
            imgUrl: '' 
        };

        const expectedActions = {
            type: ActionTypes.ADD_PRODUCT,
            payload: {
                product
            }
        };

        const action  = actions.addProduct(product);
            
        expect(action).toEqual(expectedActions);
    });

    it('it should dispatch UPDATE_PRODUCT', () => {
        const product = { 
            id: 3, 
            name: 'product', 
            price: '87', 
            imgUrl: '' 
        };

        const expectedActions = {
            type: ActionTypes.UPDATE_PRODUCT,
            payload: {
                product: product
            }
        };

        const action = actions.updateProduct(product);
            
        expect(action).toEqual(expectedActions);
    });

    it('it should dispatch DELETE_PRODUCT', () => {
        const expectedActions = {
            type: ActionTypes.DELETE_PRODUCT,
            payload: {
                productId: 3
            }
        };

        const action = actions.deleteProduct(3);
            
        expect(action).toEqual(expectedActions);
    });
});