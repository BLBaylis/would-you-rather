import React from 'react';

const AuthedUserVoteDisplay = ({ choice }) => {
  const styles = {
    padding: '1rem 0',
    boxShadow: '0 29px 32px -20px rgba(0,0,0,0.35)',
  }
  return <div style = {styles}>You voted for {choice}</div>
}

export default AuthedUserVoteDisplay