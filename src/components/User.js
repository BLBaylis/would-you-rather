import React from 'react'

const User = ({ name, position, questions, answers, avatarURL, total }) => {
  return (
    <div style = {{display: 'inline-flex', margin: '1.5rem'}}>
      <div style = {{width: '40px', border : 'solid 1px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{position}</div>
      <div style = {{padding: '2rem', borderTop : 'solid 1px', borderBottom : 'solid 1px', display: 'flex', alignItems: 'center'}}>
        <img style = {{borderRadius: '50%'}} src = {avatarURL}/>
      </div>
      <div style = {{border : 'solid 1px', padding: '2rem'}}>
        <h2>{name}</h2>
        <p>Answered questions: {Object.keys(answers).length}</p>
        <p>Created questions: {questions.length}</p>
        <p>Total: {total}</p>
      </div>
      
    </div>
  )
}

export default User;
