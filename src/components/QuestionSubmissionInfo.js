import React from 'react'

const QuestionSubmissionInfo = ({ name, timestamp }) => {
  const timestampDateObj = new Date(timestamp)
  const submissionDate = timestampDateObj.toLocaleDateString('en-UK')
  const submissionTime = timestampDateObj.toLocaleTimeString('en-UK')
  return (
    <>
      <span style = {{display: 'block'}}>Asked by {name}</span>
      <span style = {{display: 'block', marginBottom: '10px'}}>{submissionDate} {submissionTime[1] === ':' ? `0${submissionTime}` : submissionTime}</span>
    </>
  )
}

export default QuestionSubmissionInfo
