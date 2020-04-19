import {USER_LOGIN, USER_LOGOUT} from '../actions/types';
import {REGISTER_USER} from '../actions/types';

const authedUser = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.authedUser;
    case USER_LOGOUT:
      return null;
    case REGISTER_USER:
      return action.userId;
    default:
      return state;
  }
};

export default authedUser;