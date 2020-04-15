import {USER_LOGIN, USER_LOGOUT} from '../actions/authedUser'
import {REGISTER_USER} from '../actions/users'

const authedUser = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.authedUser;
    case USER_LOGOUT:
      return null;
    case REGISTER_USER:
      return action.userId
    default:
      return state
  }
}

export default authedUser