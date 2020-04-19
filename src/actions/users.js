import {
  RECEIVE_INITIAL_USERS,
  ADD_ANSWER_TO_USER,
  UPDATE_ANSWER_IN_USER,
  ADD_QUESTION_TO_USER,
  REMOVE_ANSWER_FROM_USER,
  REMOVE_ALL_USERS
} from './types';

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

export const removeAllUsers = () => ({
  type: REMOVE_ALL_USERS
});