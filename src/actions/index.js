import {_getQuestions as getQuestions, _getUsers as getUsers} from '../_DATA'
import {receiveInitialPolls, answerPoll} from './polls'
import {receiveInitialUsers} from './users'

export const handleInitialData = () => async dispatch => {
  const [questions, users] = await Promise.all([getQuestions(), getUsers()])
  dispatch(receiveInitialPolls(questions))
  dispatch(receiveInitialUsers(users))
}