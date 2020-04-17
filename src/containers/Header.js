import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleLogout} from '../actions'

const Header = ({users, authedUser, handleLogout}) => {
  const name = users[authedUser].name
  const styles = {margin: '4px 8px'}
  return (
    <div style = {{display: 'flex', justifyContent: 'space-between', padding: '4px'}}>
      <div> 
        <Link style = {styles} to = "/">Home</Link>
        <Link style = {styles} to = "/leaderboard">Leaderboard</Link>
        <Link style = {styles} to = "/new">Post question</Link>
      </div>
      <div>
        <span style = {{marginRight: '12px'}}>Logged in as {name}</span>
        <button style = {styles} onClick = {handleLogout}>Log out</button>
      </div>
    </div>
  )
}

const mapStateToProps = ({users, authedUser}) => ({users, authedUser})

export default connect(mapStateToProps, {handleLogout})(Header)

