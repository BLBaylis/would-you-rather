import {combineReducers} from 'redux';
import polls from './polls';
import users from './users';
import authedUser from './authedUser';

export default combineReducers({polls, users, authedUser});