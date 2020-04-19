import {LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER} from './types';

export const loginUser = authedUser => ({
  type: LOGIN_AUTHED_USER,
  authedUser
});

export const logoutUser = () => ({
  type: LOGOUT_AUTHED_USER
});