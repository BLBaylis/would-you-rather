export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogin = authedUser => ({
  type: USER_LOGIN,
  authedUser
});

export const userLogout = () => ({
  type: USER_LOGOUT
});