import {
  RECEIVE_INITIAL_POLLS,
  ADD_ANSWER_TO_POLL,
  UPDATE_USER_IN_POLL,
  CREATE_NEW_POLL,
  REMOVE_VOTE_FROM_POLL
} from '../actions/types';

const option = optionType => (optionState = {}, action) => {
  const {type, selectedAnswer, userId} = action;
  let votes = optionState.votes;
  switch (type) {

    case ADD_ANSWER_TO_POLL:
      if (selectedAnswer !== optionType) {
        return optionState;
      }
      votes = votes.concat(userId);
      break;

    case UPDATE_USER_IN_POLL:
      if (selectedAnswer !== optionType) {
        votes = votes.includes(userId) ? votes.filter(existingUserId => existingUserId !== userId) : votes;
      } else {
        votes = votes.includes(userId) ? votes : votes.concat(userId);
      }
      break;

    case REMOVE_VOTE_FROM_POLL:
      votes = votes.filter(existingUserId => existingUserId !== userId);
      break;

    default:
      return optionState;
  }

  return {
    ...optionState,
    votes
  };
};

const optionOne = option('optionOne');
const optionTwo = option('optionTwo');

const poll = (pollState = {}, action) => {
  const {type} = action;
  switch (type) {
    case ADD_ANSWER_TO_POLL:
    case UPDATE_USER_IN_POLL:
    case REMOVE_VOTE_FROM_POLL:
      return {
        ...pollState,
        optionOne: optionOne(pollState.optionOne, action),
        optionTwo: optionTwo(pollState.optionTwo, action)
      };
    case CREATE_NEW_POLL:
      return action.poll;
    default:
      return pollState;
  }
};

const polls = (state = {}, action) => {
  const { type, pollId } = action;
  switch (type) {
    case RECEIVE_INITIAL_POLLS:
      return {...state, ...action.polls};
    case ADD_ANSWER_TO_POLL:
    case UPDATE_USER_IN_POLL:
    case CREATE_NEW_POLL:
    case REMOVE_VOTE_FROM_POLL:
      return {
        ...state,
        [pollId]: poll(state[pollId], action)
      };
    default:
      return state;
  }
};

export default polls;