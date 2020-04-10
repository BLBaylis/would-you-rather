import {USER_LOGIN, USER_LOGOUT} from '../actions/authedUser'

const authedUser = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.authedUser;
    case USER_LOGOUT:
      return null;
    default:
      return state
  }
}

export default authedUser