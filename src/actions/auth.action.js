import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from './types';

const userLoginSuccess = () => ({ type: USER_LOGIN_SUCCESS });
const userLoginFailure = () => ({ type: USER_LOGIN_FAILURE });

const login = (username, password) => dispatch => {
  if (username === 'bolaji' && password === 'bolaji') {
    return dispatch(userLoginSuccess());
  }
  return dispatch(userLoginFailure());
}

export default login;
