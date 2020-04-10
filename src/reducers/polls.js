import {RECEIVE_INITIAL_POLLS, ANSWER_POLL} from '../actions/polls'

const polls = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INITIAL_POLLS:
      return {...state, ...action.polls}
    case ANSWER_POLL:
      return {
        ...state,
        [action.id]: {
          ...[action.id],
          [action.selectedAnswer]: {
            ...[action.id.selectedAnswer],
            votes: [/*user name*/]
        }
      }
    }
    default:
      return state
  }
}

export default polls