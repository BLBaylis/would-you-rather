import React from 'react'
import {Link} from 'react-router-dom'

const Nav = props => {
  const styles = {padding: '8px'}
  return (
    <div> 
      <Link style = {styles} to = "/">Home</Link>
      <Link style = {styles} to = "/leaderboard">Leaderboard</Link>
      <Link style = {styles} to = "/new">Post question</Link>
    </div>
  )
}

export default Nav
