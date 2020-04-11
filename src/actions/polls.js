export const RECEIVE_INITIAL_POLLS = 'RECEIVE_INITIAL_POLLS';
export const ADD_USER_TO_POLL = 'ADD_USER_TO_POLL';

export const receiveInitialPolls = polls => ({
  type: RECEIVE_INITIAL_POLLS,
  polls
})

export const addUserToPoll = (userId, pollId, selectedAnswer) => ({
  type: ADD_USER_TO_POLL,
  userId,
  pollId,
  selectedAnswer
})