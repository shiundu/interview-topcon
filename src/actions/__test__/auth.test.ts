import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ActionTypes } from '../types';
import * as actions from '../auth';
import { initialState } from '.././../reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({...initialState});


describe('Auth async actions', () => {

  it('it should dispatch LOGIN_USER', () => {

        const expectedActions = [{
            type: ActionTypes.LOGIN_USER,
            payload: {
                user: {
                    error: true
                }
            }
        }];

        return store.dispatch(actions.loginUser({...initialState.user})).then(() => {
            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action);
            
            expect(actionTypes).toEqual(expectedActions);
        });
  });

  it('it should dispatch LOGOUT_USER', () => {
        const expectedActions = {
            type: ActionTypes.LOGOUT_USER,
        };
        
        const action  = actions.logoutUser()
            
        expect(action).toEqual(expectedActions);
    });

});