import {_getQuestions as getQuestions, _getUsers as getUsers, _saveQuestionAnswer as postPollAnswer} from '../_DATA'
import {receiveInitialPolls, addUserToPoll, updateUserInPoll} from './polls'
import {receiveInitialUsers, addPollToUser, updatePollInUser} from './users'
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

export const castInitialVote = (userId, pollId, answer) => async dispatch => {
  await postPollAnswer({
    authedUser: userId,
    qid: pollId, 
    answer
  });
  dispatch(addUserToPoll(userId, pollId, answer))
  dispatch(addPollToUser(userId, pollId, answer))
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