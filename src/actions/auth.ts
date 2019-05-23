import axios from 'axios';
import { Dispatch } from 'redux';

import { 
    ActionTypes, 
    LoginUserAction,
    LogoutUserAction
} from './types';

export function loginUser(user: any): any {
    return async (dispatch: Dispatch) => {
        try {
          const response = await axios.get('user.json');
          console.warn('response', user.username, response.data.email);

          if (user.username === response.data.email) {
            return dispatch({
                type: ActionTypes.LOGIN_USER,
                payload: {
                    user: response.data
                }
              });
          }
          throw console.warn();
        } catch (err) {
          return dispatch({
            type: ActionTypes.LOGIN_USER,
            payload: {
                user: {
                    error: true
                }
            }
            })
        };
    }
}

export function logoutUser(): LogoutUserAction {
    return {
      type: ActionTypes.LOGOUT_USER
    }
}

export type Action = LoginUserAction | LogoutUserAction