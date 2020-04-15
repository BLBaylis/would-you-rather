import React from 'react'
import {Link} from 'react-router-dom'

const Nav = props => {
  return (
    <div> 
      <Link to = "/">Home</Link>
      <Link to = "/leaderboard">Leaderboard</Link>
      <Link to = "/new">Post question</Link>
    </div>
  )
}

export default Nav
