import {
  _getQuestions as getQuestions,
  _getUsers as getUsers, 
  _saveQuestionAnswer as postPollAnswer,
  _saveQuestion as postNewQuestion
} from '../_DATA'
import {receiveInitialPolls, addAnswerToPoll, updateUserInPoll, createNewPoll} from './polls'
import {receiveInitialUsers, addAnswerToUser, updatePollInUser, addQuestionToUser} from './users'
import {userLogin, userLogout} from './authedUser'

export const handleInitialData = () => async dispatch => {
  const [questions, users] = await Promise.all([getQuestions(), getUsers()])
  dispatch(receiveInitialPolls(questions))
  dispatch(receiveInitialUsers(users))
}

export const handleLogin = id => async dispatch => {
  const users = await getUsers();
  if (!Object.keys(users).includes(id)) {
    return alert('Log in failed.  Try again')
  };
  dispatch(userLogin(id))
}

export { userLogout as handleLogout} 

export const handleInitialVote = (userId, pollId, answer) => async dispatch => {
  await postPollAnswer({
    authedUser: userId,
    qid: pollId, 
    answer
  });
  dispatch(addAnswerToPoll(userId, pollId, answer))
  dispatch(addAnswerToUser(userId, pollId, answer))
}

export const changePollAnswer = (userId, pollId, answer) => async dispatch => {
  await postPollAnswer({
    authedUser: userId,
    qid: pollId, 
    answer
  });
  dispatch(updateUserInPoll(userId, pollId, answer))
  dispatch(updatePollInUser(userId, pollId, answer))
}

export const handleNewPollCreation = (author, optionOneText, optionTwoText) => async dispatch => {
  const newPoll = await postNewQuestion({
    author,
    optionOneText,
    optionTwoText
  })
  dispatch(createNewPoll(newPoll.id, newPoll))
  dispatch(addQuestionToUser(newPoll.id, author))
}