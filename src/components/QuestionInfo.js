import React from 'react'

const VoteButton = ({ handleClick, label }) => <button onClick = {handleClick} style = {{ width: '140px'}}>{label}</button>

const VoteStatistics = ({option, votes}) => {
  const total = votes.optionOne + votes.optionTwo;
  return <p>{Number(votes[option]/total * 100).toPrecision(5)}% - {votes[option]} out of {total}</p>
}

const QuestionInfo = ({ pollId, authedUser, authedUserVote, optionInfo, dispatches }) => {

  const createClickHandler = option => {
    const {handleInitialVote, changePollAnswer, handleRemoveVote} = dispatches;
    if (!authedUserVote) {
      return () => handleInitialVote(authedUser, pollId, option)
    } else if (authedUserVote === option) {
      return () => handleRemoveVote(authedUser, pollId)
    } else {
      return () => changePollAnswer(authedUser, pollId, option)
    }
  }

  const votes = {
    optionOne: optionInfo.optionOne.votes.length,
    optionTwo: optionInfo.optionTwo.votes.length
  }

  return (
    <div style ={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem'}}>
      <div style = {{width: '100%'}}>Would you rather....</div>
      <div>
        <VoteButton handleClick = {createClickHandler("optionOne")} label = {optionInfo.optionOne.text}/>
        {authedUserVote && <VoteStatistics option = 'optionOne' votes = {votes} />}
      </div>
      <strong style = {{ margin: '0 10px'}}>or</strong>
      <div>
        <VoteButton handleClick = {createClickHandler("optionTwo")} label = {optionInfo.optionTwo.text}/>
        {authedUserVote && <VoteStatistics option = 'optionTwo' votes = {votes} />}
      </div>
    </div>
  )
}

export default QuestionInfo
