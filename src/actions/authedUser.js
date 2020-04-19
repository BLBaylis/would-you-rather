import {LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER} from './types';

export const userLogin = authedUser => ({
  type: LOGIN_AUTHED_USER,
  authedUser
});

export const userLogout = () => ({
  type: LOGOUT_AUTHED_USER
});