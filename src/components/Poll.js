import React from 'react'
import {connect} from 'react-redux'
import { castInitialVote } from "../actions";

export const Poll = ({ authedUser, users, poll, castInitialVote }) => {
  const {author, timestamp, optionOne, optionTwo, id: pollId} = poll;
  const authedUserVote  = users[authedUser].answers[pollId] || null
  return (
    <div style = {{ display: 'inline-block'}}>
      <div style = {{display: 'inline-flex', border: '1px solid', margin: '1.5rem', marginBottom: authedUserVote ? 0 : '1.5rem'}}>
        <div style = {{borderRight: '1px solid', padding: '2rem'}}>
          <span style = {{display: 'block'}}>Asked by {author.id}</span>
          <span style = {{display: 'block', marginBottom: '10px'}}>{new Date(timestamp).toLocaleDateString('en-UK')} {new Date(timestamp).toLocaleTimeString('en-UK')}</span>
          <img src = {author.avatarURL} style = {{borderRadius: '50%'}} alt = {`${author.name}'s avatar`}/>
        </div>
        <div style ={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem'}}>
          <div style = {{width: '100%'}}>Would you rather....</div>
            <button onClick = {() => castInitialVote(authedUser, pollId, "optionOne")} style = {{ width: '140px'}}>{optionOne.text}</button>
            <strong style = {{ margin: '0 10px'}}>or</strong>
            <button onClick = {() => castInitialVote(authedUser, pollId, "optionTwo")} style = {{ width: '140px'}}>{optionTwo.text}</button>
        </div>
      </div>
      {authedUserVote && <div style = {{border: 'solid 1px', borderTop: 'none', margin: '0 1.5rem 1.5rem', padding: '1rem 0'}}>You voted for {poll[authedUserVote].text}</div>}
    </div>
  )
}

const mapStateToProps = ({authedUser, users}) => ({authedUser, users})

export default connect(mapStateToProps, {castInitialVote})(Poll);
