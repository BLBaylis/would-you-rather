import React from 'react'
import {connect} from 'react-redux'
import { handleInitialVote, changePollAnswer, handleRemoveVote } from "../actions";

const QuestionInfo = ({ handleInitialVote, changePollAnswer, optionOneLabel, optionTwoLabel, authedUser, pollId, authedUserVote, polls, handleRemoveVote }) => {

  const createClickHandler = option => {
    let handler;
    if (!authedUserVote) {
      handler =  () => handleInitialVote(authedUser, pollId, option)
    } else if (authedUserVote === option) {
      handler =  () => handleRemoveVote(authedUser, pollId)
    } else {
      handler =  () => changePollAnswer(authedUser, pollId, option)
    }
    //console.log(option)
    //console.log('handler', handler)
    return handler
  }
  //console.log(authedUserVote)
  const optionOneVotes = polls[pollId].optionOne.votes.length;
  const optionTwoVotes = polls[pollId].optionTwo.votes.length;
  const total = optionOneVotes + optionTwoVotes
  return (
    <div style ={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem'}}>
      <div style = {{width: '100%'}}>Would you rather....</div>
      <div>
        <button onClick = {createClickHandler("optionOne")} style = {{ width: '140px'}}>{optionOneLabel}</button>
        {authedUserVote && (
          <p>{optionOneVotes/total * 100}% - {optionOneVotes} out of {total}</p>
        )}
      </div>
      <strong style = {{ margin: '0 10px'}}>or</strong>
      <div>
        <button onClick = {createClickHandler("optionTwo")} style = {{ width: '140px'}}>{optionTwoLabel}</button>
        {authedUserVote && (
          <p>{optionTwoVotes/total * 100}% - {optionTwoVotes} out of {total}</p>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ authedUser, polls }) => ({ authedUser, polls })

export default connect(mapStateToProps, { handleInitialVote, changePollAnswer, handleRemoveVote })(QuestionInfo)
