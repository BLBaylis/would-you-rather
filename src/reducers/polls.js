import {RECEIVE_INITIAL_POLLS, ADD_USER_TO_POLL} from '../actions/polls'

const polls = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INITIAL_POLLS:
      return {...state, ...action.polls}
    case ADD_USER_TO_POLL:
      return {
        ...state,
        [action.pollId]: {
          ...state[action.pollId],
          [action.selectedAnswer]: {
            ...state[action.pollId][action.selectedAnswer],
            votes: [...state[action.pollId][action.selectedAnswer].votes, action.userId]
          }
        }
      }
    default:
      return state
  }
}

export default polls