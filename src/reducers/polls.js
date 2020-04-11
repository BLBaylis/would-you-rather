import {RECEIVE_INITIAL_POLLS, ADD_USER_TO_POLL} from '../actions/polls'

const votes = (voteState = [], {type, userId}) => {
  switch (type) {
    case ADD_USER_TO_POLL:
      return [...voteState, userId]
    default:
      return voteState
  }
}

const option = (optionState = {}, action) => {
  switch (action.type) {
    case ADD_USER_TO_POLL:
      return {
        ...optionState,
        votes: votes(optionState.votes, action)
      }
    default:
      return optionState
  }
}

const poll = (pollState = {}, action) => {
  const {type, selectedAnswer} = action
  switch (type) {
    case ADD_USER_TO_POLL:
      return {
        ...pollState,
        [selectedAnswer]: option(pollState[selectedAnswer], action)
      }
    default:
      return pollState
  }
}

const polls = (state = {}, action) => {
  const { type, pollId } = action
  switch (type) {
    case RECEIVE_INITIAL_POLLS:
      return {...state, ...action.polls}
    case ADD_USER_TO_POLL:
      return {
        ...state,
        [pollId]: poll(state[pollId], action)
      }
    default:
      return state
  }
}

export default polls