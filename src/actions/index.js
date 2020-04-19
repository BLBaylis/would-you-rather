import {
  _getQuestions as getQuestions,
  _getUsers as getUsers,
  _saveQuestionAnswer as postPollAnswer,
  _saveQuestion as postNewQuestion,
  _removeAnswer as removeAnswer,
  _saveNewUser as saveNewUser
} from '../_DATA';

import {
  receiveInitialPolls,
  addAnswerToPoll,
  updateUserInPoll,
  createNewPoll,
  removeVoteFromPoll
} from './polls';

import {
  receiveInitialUsers,
  addAnswerToUser,
  updateAnswerInUser,
  addQuestionToUser,
  removeAnswerFromUser,
  addNewUser
} from './users';

import {userLogin, userLogout} from './authedUser';

export const handleInitialData = () => async dispatch => {
  const [questions, users] = await Promise.all([getQuestions(), getUsers()]);
  dispatch(receiveInitialPolls(questions));
  dispatch(receiveInitialUsers(users));
};

export const handleLogin = id => async dispatch => {
  const users = await getUsers();
  if (!Object.keys(users).includes(id)) {
    throw new Error('User not found');
  };
  dispatch(userLogin(id));
};

export { userLogout as handleLogout};

export const handleRegister = (userId, name) => async dispatch => {
  await saveNewUser(userId, name);
  dispatch(addNewUser(userId, name));
  dispatch(userLogin(userId));
};

export const handleInitialVote = (userId, pollId, answer) => async dispatch => {
  await postPollAnswer({
    authedUser: userId,
    qid: pollId,
    answer
  });
  dispatch(addAnswerToPoll(userId, pollId, answer));
  dispatch(addAnswerToUser(userId, pollId, answer));
};

export const changePollAnswer = (userId, pollId, answer) => async dispatch => {
  await postPollAnswer({
    authedUser: userId,
    qid: pollId,
    answer
  });
  dispatch(updateUserInPoll(userId, pollId, answer));
  dispatch(updateAnswerInUser(userId, pollId, answer));
};

export const handleNewPollCreation = (author, optionOneText, optionTwoText) => async dispatch => {
  const newPoll = await postNewQuestion({
    author,
    optionOneText,
    optionTwoText
  });
  dispatch(createNewPoll(newPoll.id, newPoll));
  dispatch(addQuestionToUser(author, newPoll.id));
};

export const handleRemoveVote = (userId, pollId) => async dispatch => {
  await removeAnswer({
    authedUser: userId,
    qid: pollId
  });
  dispatch(removeVoteFromPoll(userId, pollId));
  dispatch(removeAnswerFromUser(userId, pollId));
};