import {RECEIVE_INITIAL_USERS, ADD_ANSWER_TO_USER, UPDATE_POLL_IN_USER, ADD_QUESTION_TO_USER} from '../actions/users'

const answers = (answersState = {}, {type, pollId, selectedAnswer}) => {
  switch (type) {
    case ADD_ANSWER_TO_USER:
    case UPDATE_POLL_IN_USER:
      return {
          ...answersState,
          [pollId]: selectedAnswer
      }
    default:
      return answersState
    }
}

const user = (userState = {}, action) => {
  switch (action.type) {
    case ADD_ANSWER_TO_USER:
    case UPDATE_POLL_IN_USER:
      return {
        ...userState,
        answers: answers(userState.answers, action)
      }
    case ADD_QUESTION_TO_USER:
      return {
        ...userState,
        questions: [...userState.questions, action.pollId]
      }
    default:
      return userState
    }
}

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_INITIAL_USERS:
      return {...state, ...action.users}
    case ADD_ANSWER_TO_USER:
    case UPDATE_POLL_IN_USER:
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.userId]: user(state[action.userId], action)
      }
    default:
      return state
  }
}

export default users