import {
  RECEIVE_INITIAL_POLLS,
  ADD_ANSWER_TO_POLL,
  UPDATE_USER_IN_POLL,
  CREATE_NEW_POLL,
  REMOVE_VOTE_FROM_POLL
} from './types';

export const receiveInitialPolls = polls => ({
  type: RECEIVE_INITIAL_POLLS,
  polls
});

export const addAnswerToPoll = (userId, pollId, selectedAnswer) => ({
  type: ADD_ANSWER_TO_POLL,
  userId,
  pollId,
  selectedAnswer
});

export const updateUserInPoll = (userId, pollId, selectedAnswer) => ({
  type: UPDATE_USER_IN_POLL,
  userId,
  pollId,
  selectedAnswer
});

export const createNewPoll = (pollId, poll) => ({
  type: CREATE_NEW_POLL,
  pollId,
  poll
});

export const removeVoteFromPoll = (userId, pollId) => ({
  type: REMOVE_VOTE_FROM_POLL,
  userId,
  pollId
});