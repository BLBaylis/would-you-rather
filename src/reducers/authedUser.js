import {LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER} from '../actions/types';

const authedUser = (state = null, action) => {
  switch (action.type) {
    case LOGIN_AUTHED_USER:
      return action.authedUser;
    case LOGOUT_AUTHED_USER:
      return null;
    default:
      return state;
  }
};

export default authedUser;