import {
  RECEIVE_INITIAL_USERS,
  ADD_ANSWER_TO_USER,
  UPDATE_ANSWER_IN_USER,
  ADD_QUESTION_TO_USER,
  REMOVE_ANSWER_FROM_USER,
  ADD_NEW_USER
} from '../actions/types';

import avatarURL from '../user-avatar.png';

const answers = (answersState = {}, {type, pollId, selectedAnswer}) => {
  switch (type) {
    case ADD_ANSWER_TO_USER:
    case UPDATE_ANSWER_IN_USER:
      return {
          ...answersState,
          [pollId]: selectedAnswer
      };
    case REMOVE_ANSWER_FROM_USER:
      const {[pollId]: pid, ...pollsToKeep} = answersState;
      return pollsToKeep;
    default:
      return answersState;
    }
};

const user = (userState = {}, action) => {
  switch (action.type) {
    case ADD_ANSWER_TO_USER:
    case UPDATE_ANSWER_IN_USER:
    case REMOVE_ANSWER_FROM_USER:
      return {
        ...userState,
        answers: answers(userState.answers, action)
      };
    case ADD_QUESTION_TO_USER:
      return {
        ...userState,
        questions: [...userState.questions, action.pollId]
      };
    default:
      return userState;
    }
};

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INITIAL_USERS:
      return {...state, ...action.users};
    case ADD_ANSWER_TO_USER:
    case UPDATE_ANSWER_IN_USER:
    case REMOVE_ANSWER_FROM_USER:
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.userId]: user(state[action.userId], action)
      };
    case ADD_NEW_USER:
      return {
        ...state,
        [action.userId]: {
          id: action.userId,
          name: action.name,
          avatarURL,
          answers: {},
          questions: []
        }
      };
    default:
      return state;
  }
};

export default users;