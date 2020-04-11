import React from 'react'
import {connect} from 'react-redux'
import { castInitialVote, changePollAnswer } from "../actions";

const QuestionInfo = ({ castInitialVote, changePollAnswer, optionOneLabel, optionTwoLabel, authedUser, pollId, authedUserVote }) => {
  const createClickHandler = option => {
    return authedUserVote ? () => changePollAnswer(authedUser, pollId, option) : () => castInitialVote(authedUser, pollId, option)
  }
  return (
    <div style ={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem'}}>
      <div style = {{width: '100%'}}>Would you rather....</div>
        <button onClick = {createClickHandler("optionOne")} style = {{ width: '140px'}}>{optionOneLabel}</button>
        <strong style = {{ margin: '0 10px'}}>or</strong>
        <button onClick = {createClickHandler("optionTwo")} style = {{ width: '140px'}}>{optionTwoLabel}</button>
    </div>
  )
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps, { castInitialVote, changePollAnswer })(QuestionInfo)
