import React from 'react'
import {connect} from 'react-redux'
import { handleInitialVote, changePollAnswer, handleRemoveVote } from "../actions";

import AuthorInfo from './AutherInfo'
import QuestionInfo from './QuestionInfo';

export const Poll = ({ authedUser, users, polls, match, ...dispatches }) => {
  const {id} = match.params
  if (!authedUser) {
    return null
  }
  const poll = polls[id]
  const {author, timestamp, optionOne, optionTwo} = poll;
  const authedUserVote  = users[authedUser].answers[id] || null
  return (
    <div style = {{ display: 'inline-block'}}>
      <div style = {{display: 'inline-flex', border: '1px solid', margin: '1.5rem', marginBottom: authedUserVote ? 0 : '1.5rem'}}>
        <AuthorInfo author = {users[author]} timestamp = {timestamp}/>
        <QuestionInfo 
          optionInfo = {{
            optionOne,
            optionTwo
          }}
          pollId = {id} 
          authedUser = {authedUser}
          authedUserVote = {authedUserVote}
          dispatches = {dispatches}
        />
      </div>
      {authedUserVote && <AuthedUserVoteDisplay choice = {poll[authedUserVote].text}/>}
    </div>
  )
}

const AuthedUserVoteDisplay = ({ choice }) => {
  const styles = {
    border: 'solid 1px', 
    borderTop: 'none', 
    margin: '0 1.5rem 1.5rem', 
    padding: '1rem 0'
  }
  return <div style = {styles}>You voted for {choice}</div>
}

const mapStateToProps = ({authedUser, users, polls}) => ({authedUser, users, polls})

export default connect(mapStateToProps, { handleInitialVote, changePollAnswer, handleRemoveVote })(Poll);
