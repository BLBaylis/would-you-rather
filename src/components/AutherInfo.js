import React from 'react'

const AutherInfo = ({ author, timestamp }) => {
  const timestampDateObj = new Date(timestamp)
  const submissionDate = timestampDateObj.toLocaleDateString('en-UK')
  const submissionTime = timestampDateObj.toLocaleTimeString('en-UK')
  return (
    <div style = {{borderRight: '1px solid', padding: '2rem'}}>
      <span style = {{display: 'block'}}>Asked by {author.name}</span>
      <span style = {{display: 'block', marginBottom: '10px'}}>{submissionDate} {submissionTime[1] === ':' ? `0${submissionTime}` : submissionTime}</span>
      <img width = '128px' height = '128px' src = {author.avatarURL} style = {{borderRadius: '50%'}} alt = {`${author.name}'s avatar`}/>
    </div>
  )
}

export default AutherInfo
