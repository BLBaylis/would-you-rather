export const RECEIVE_INITIAL_USERS = 'RECEIVE_INITIAL_USERS';

export const receiveInitialUsers = users => ({
  type: RECEIVE_INITIAL_USERS,
  users
})