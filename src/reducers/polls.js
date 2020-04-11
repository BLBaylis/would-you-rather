import {RECEIVE_INITIAL_POLLS, ADD_USER_TO_POLL, UPDATE_USER_IN_POLL} from '../actions/polls'

const option = (optionState = {}, {type, userId}) => {
  const votes = optionState.votes
  switch (type) {
    case ADD_USER_TO_POLL:
      return {
        ...optionState,
        votes: votes.concat(userId)
      }
    case UPDATE_USER_IN_POLL:
      return {
        ...optionState,
        votes: votes.includes(userId) ? votes.filter(existingUserId => existingUserId !== userId) : votes.concat(userId)
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
    case UPDATE_USER_IN_POLL:
      const unselectedAnswer = selectedAnswer === "optionOne" ? "optionTwo" : "optionOne"
      return {
        ...pollState,
        [selectedAnswer]: option(pollState[selectedAnswer], action),
        [unselectedAnswer]: option(pollState[unselectedAnswer], action)
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
    case UPDATE_USER_IN_POLL:
      return {
        ...state,
        [pollId]: poll(state[pollId], action)
      }
    default:
      return state
  }
}

export default polls