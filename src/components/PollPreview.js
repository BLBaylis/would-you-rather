import React from 'react'
import {connect} from 'react-redux'

import AuthorInfo from './AutherInfo'
import { Link } from 'react-router-dom'

export const PollPreview = ({ authedUser, users, poll }) => {
  const {author, timestamp, optionOne, optionTwo, id: pollId} = poll
  if (!author || !users[author]) {
    return null
  }
  return (
    <Link to = {`question/${pollId}`} style = {{ display: 'inline-flex', flexDirection: 'column', margin: '1.5rem'}}>
      <div style = {{display: 'inline-flex', flexWrap: 'flex', border: '1px solid', marginBottom: 0}}>
        <AuthorInfo author = {users[author]} timestamp = {timestamp}/>
        <div style ={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem'}}>
          <div style = {{width: '100%'}}>Would you rather....</div>
          <div style = {{ width: '140px'}}>{optionOne.text}</div>
          <strong style = {{ margin: '0 10px'}}>or</strong>
          <div style = {{ width: '140px'}}>{optionTwo.text}</div>
        </div>
      </div>
      <button style = {{
        display: 'block',
        width: '100%',
        border: 'solid 1px', 
        borderTop: 'none', 
        padding: '1rem 0',
        cursor: 'pointer'
      }}>Show full details</button>
    </Link>
  )
}

const mapStateToProps = ({authedUser, users}) => ({authedUser, users})

export default connect(mapStateToProps)(PollPreview);
