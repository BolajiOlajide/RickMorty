import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../actions/types';
import initialState from './initialState';

const characters = (state=initialState.auth, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        value: true
      }

    case USER_LOGIN_FAILURE:
    default:
      return state;
  }
}

export default characters;
