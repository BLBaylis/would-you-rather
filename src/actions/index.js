import {_getQuestions as getQuestions, _getUsers as getUsers} from '../_DATA'
import {receiveInitialPolls, answerPoll} from './polls'
import {receiveInitialUsers} from './users'
import {userLogin, userLogout} from './authedUser'

export const handleInitialData = () => async dispatch => {
  const [questions, users] = await Promise.all([getQuestions(), getUsers()])
  dispatch(receiveInitialPolls(questions))
  dispatch(receiveInitialUsers(users))
}

export const handleLogin = user => userLogin(user)

export { userLogout as handleLogout} 