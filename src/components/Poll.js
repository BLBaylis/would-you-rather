import React from 'react'
import {connect} from 'react-redux'

import AuthorInfo from './AutherInfo'
import QuestionInfo from './QuestionInfo';

export const Poll = ({ authedUser, users, polls, match }) => {
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
          optionOneLabel = {optionOne.text} 
          optionTwoLabel = {optionTwo.text} 
          pollId = {id} 
          authedUserVote = {authedUserVote}
        />
      </div>
      {authedUserVote && <div style = {{
        border: 'solid 1px', 
        borderTop: 'none', 
        margin: '0 1.5rem 1.5rem', 
        padding: '1rem 0'
      }}>
        You voted for {poll[authedUserVote].text}
      </div>}
    </div>
  )
}

const mapStateToProps = ({authedUser, users, polls}) => ({authedUser, users, polls})

export default connect(mapStateToProps)(Poll);
