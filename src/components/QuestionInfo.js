import React from 'react'

const QuestionInfo = ({ optionOneChild, optionTwoChild, children }) => (
    <div style ={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem'}}>
      <h3 style = {{width: '100%', margin: 0}}>Would you rather...</h3>
      <div style ={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '2rem'}}>
        {optionOneChild()}
        <strong style = {{margin: '10px'}}>or</strong>
        {optionTwoChild()}
      </div>
      {children}
    </div>
)

export default QuestionInfo
