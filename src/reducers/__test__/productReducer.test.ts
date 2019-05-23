import { reducer, initialState } from './../productReducer';
import { ActionTypes } from '../../actions/types'
describe('Product reducer', () => {
    it('handles INITIAL_PRODUCT_LIST request', () => {
      const expected = { 
          type: ActionTypes.INITIAL_PRODUCT_LIST,
          payload: {
            products: []
          } 
        }
      const results = {
        ...initialState,
      }
      expect(reducer(initialState, expected)).toEqual(results);
    });

    it('handles ADD_PRODUCT request', () => {
        const product = { 
            id: 1, 
            name: 'product', 
            price: '45', 
            imgUrl: '' 
        };

        const expected = { 
            type: ActionTypes.ADD_PRODUCT,
            payload: {
                product
            }
        }

        const results = {
          products: [product]
        }

        expect(reducer(initialState, expected)).toEqual(results);
      });

      it('handles UPDATE_PRODUCT request', () => {
        const original = { 
            id: 4, 
            name: 'product',
            price: '5',
            imgUrl: 'https://via.placeholder.com/200'
        };

        const updated = { 
            id: 4, 
            name: 'updated product', 
            price: '45', 
            imgUrl: 'https://via.placeholder.com/200' 
        };

        const initial = {
            products: [original]
        }

        const action = { 
            type: ActionTypes.UPDATE_PRODUCT,
            payload: {
                product: {
                    ...updated
                }
            }
        }

        const results = {
          products: [updated]
        }

        expect(reducer(initial, action)).toEqual(results);
      });

      it('handles DELETE_PRODUCT request', () => {
        const product = { 
            id: 4, 
            name: 'product', 
            price: '45', 
            imgUrl: '' 
        };

        const initial = {
            products: [product]
        }

        const expected = { 
            type: ActionTypes.DELETE_PRODUCT,
            payload: {
                productId: 4
            }
        }

        const results = {
          products: []
        }

        expect(reducer(initial, expected)).toEqual(results);
      });
});  