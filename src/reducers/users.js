import {RECEIVE_INITIAL_USERS, ADD_POLL_TO_USER} from '../actions/users'

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INITIAL_USERS:
      return {...state, ...action.users}
    case ADD_POLL_TO_USER:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.pollId]: action.selectedAnswer
          }
        }
      }
    default:
      return state
  }
}

export default users