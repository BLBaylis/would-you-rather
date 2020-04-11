export const RECEIVE_INITIAL_USERS = 'RECEIVE_INITIAL_USERS';
export const ADD_POLL_TO_USER = 'ADD_POLL_TO_USER';

export const receiveInitialUsers = users => ({
  type: RECEIVE_INITIAL_USERS,
  users
})

export const addPollToUser = (userId, pollId, selectedAnswer) => ({
  type: ADD_POLL_TO_USER,
  userId,
  pollId,
  selectedAnswer
})