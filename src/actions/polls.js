export const RECEIVE_INITIAL_POLLS = 'RECEIVE_INITIAL_POLLS';
export const ANSWER_POLL = 'ANSWER_POLL';

export const receiveInitialPolls = polls => ({
  type: RECEIVE_INITIAL_POLLS,
  polls
})

export const answerPoll = (id, selectedAnswer) => ({
  type: ANSWER_POLL,
  id,
  selectedAnswer
})