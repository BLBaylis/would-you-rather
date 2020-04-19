import {USER_LOGIN, USER_LOGOUT} from './types';

export const userLogin = authedUser => ({
  type: USER_LOGIN,
  authedUser
});

export const userLogout = () => ({
  type: USER_LOGOUT
});