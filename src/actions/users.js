export const RECEIVE_INITIAL_USERS = 'RECEIVE_INITIAL_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const UPDATE_POLL_IN_USER = 'UPDATE_POLL_IN_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export const receiveInitialUsers = users => ({
  type: RECEIVE_INITIAL_USERS,
  users
})

export const addAnswerToUser = (userId, pollId, selectedAnswer) => ({
  type: ADD_ANSWER_TO_USER,
  userId,
  pollId,
  selectedAnswer
})

export const updatePollInUser = (userId, pollId, selectedAnswer) => ({
  type: UPDATE_POLL_IN_USER,
  userId,
  pollId,
  selectedAnswer
})

export const addQuestionToUser = (pollId, author) => ({
  type: ADD_QUESTION_TO_USER,
  userId: author,
  pollId
})