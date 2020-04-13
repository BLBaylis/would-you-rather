import {
  RECEIVE_INITIAL_POLLS, 
  ADD_ANSWER_TO_POLL, 
  UPDATE_USER_IN_POLL, 
  CREATE_NEW_POLL,
  REMOVE_VOTE_FROM_POLL
} from '../actions/polls'

const option = optionType => (optionState = {}, action) => {
  const {type, selectedAnswer, userId} = action;
  const votes = optionState.votes
  switch (type) {
    case ADD_ANSWER_TO_POLL:
      if (selectedAnswer !== optionType) {
        return optionState
      }
      return {
        ...optionState,
        votes: votes.concat(userId)
      }
    case UPDATE_USER_IN_POLL:
      if (selectedAnswer !== optionType) {
        return {
          ...optionState,
          votes: votes.includes(userId) ? votes.filter(existingUserId => existingUserId !== userId) : votes
        }
      }
      return {
        ...optionState,
        votes: votes.includes(userId) ? votes : votes.concat(userId)
      }
    case REMOVE_VOTE_FROM_POLL:
      return {
        ...optionState,
        votes: votes.filter(existingUserId => existingUserId !== userId)
      }
    default:
      return optionState
  }
}

const optionOne = option('optionOne');
const optionTwo = option('optionTwo')

const poll = (pollState = {}, action) => {
  const {type} = action
  switch (type) {
    case ADD_ANSWER_TO_POLL:
    case UPDATE_USER_IN_POLL:
    case REMOVE_VOTE_FROM_POLL:
      return {
        ...pollState,
        optionOne: optionOne(pollState.optionOne, action),
        optionTwo: optionTwo(pollState.optionTwo, action)
      }
    case CREATE_NEW_POLL: 
      return action.poll;
    default:
      return pollState
  }
}

const polls = (state = {}, action) => {
  const { type, pollId } = action
  switch (type) {
    case RECEIVE_INITIAL_POLLS:
      return {...state, ...action.polls}
    case ADD_ANSWER_TO_POLL:
    case UPDATE_USER_IN_POLL:
    case CREATE_NEW_POLL:
    case REMOVE_VOTE_FROM_POLL:
      return {
        ...state,
        [pollId]: poll(state[pollId], action)
      }
    default:
      return state
  }
}

export default polls