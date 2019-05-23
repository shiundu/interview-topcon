import { User } from '../models';
import { Action } from '../actions/auth';
import { ActionTypes } from '../actions/types';

// Define the State interface for user reducer
export interface State {
    user: User
}

// initialState
export const initialState: State = {
    user: {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        authenticationToken: '',
        error: false
    }
}

export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {

        case ActionTypes.LOGIN_USER: {
            const user = action.payload.user
    
            return {
            ...state,
            user 
            }
        }

        case ActionTypes.LOGOUT_USER: {
            return {
                ...state,
                ...initialState
            }
        }

        default:
        return state
    }
};