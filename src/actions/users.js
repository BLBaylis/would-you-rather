export const RECEIVE_INITIAL_USERS = 'RECEIVE_INITIAL_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const UPDATE_ANSWER_IN_USER = 'UPDATE_ANSWER_IN_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
export const REMOVE_ANSWER_FROM_USER = 'REMOVE_ANSWER_FROM_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const receiveInitialUsers = users => ({
  type: RECEIVE_INITIAL_USERS,
  users
});

export const addAnswerToUser = (userId, pollId, selectedAnswer) => ({
  type: ADD_ANSWER_TO_USER,
  userId,
  pollId,
  selectedAnswer
});

export const updateAnswerInUser = (userId, pollId, selectedAnswer) => ({
  type: UPDATE_ANSWER_IN_USER,
  userId,
  pollId,
  selectedAnswer
});

export const removeAnswerFromUser = (userId, pollId) => ({
  type: REMOVE_ANSWER_FROM_USER,
  userId,
  pollId
});

export const addQuestionToUser = (userId, pollId) => ({
  type: ADD_QUESTION_TO_USER,
  userId,
  pollId
});

export const registerUser = (userId, name) => ({
  type: REGISTER_USER,
  userId,
  name
});
