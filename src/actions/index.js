import { _getQuestions as getQuestions} from '../_DATA'
import {receiveInitialPolls, answerPoll} from './polls'

export const handleInitialData = () => async dispatch => {
  const questions = await getQuestions()
  dispatch(receiveInitialPolls(questions))
}