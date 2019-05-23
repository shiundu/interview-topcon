import { reducer, initialState } from './../userReducer';
import { ActionTypes } from '../../actions/types'
describe('Auth reducer', () => {
    it('handles login request', () => {
      const expected = { 
          type: ActionTypes.LOGIN_USER,
          payload: {
            ...initialState,
          } 
        }
      const results = {
        ...initialState,
      }
      expect(reducer(initialState, expected)).toEqual(results);
    });

    it('handles logout request', () => {
        const expected = { 
            type: ActionTypes.LOGOUT_USER
          }
        const results = {
          ...initialState,
        }
        expect(reducer(initialState, expected)).toEqual(results);
      });
});  