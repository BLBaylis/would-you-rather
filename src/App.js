import React, { Component } from 'react';
import {connect} from 'react-redux'

import LeaderBoard from './components/LeaderBoard'
import PollsList from './components/PollsList'
import NewPoll from './components/NewPoll';
import {handleInitialData, handleLogin, handleLogout} from './actions'
import './App.css';

class App extends Component {

  state = {
    view: 'new poll'
  }

  componentDidMount() {
    this.props.handleInitialData();
    this.props.handleLogin('owenwest');
  };

  switchView = newView => this.setState({view : newView})

  render() {
    const {view} = this.state;
    const {authedUser, handleLogin, handleLogout} = this.props;
    return (
      <div className="App">
        <div>
          <p>{authedUser ? `Logged in as ${authedUser}` : 'Logged out'}</p>
          {authedUser ? <button onClick = {handleLogout}>Log out</button> : <button onClick = {() => handleLogin('owenwest')}>Log In</button>}
        </div>
        <div>
          <button onClick = {() => this.switchView("home")}>Home</button>
          <button onClick = {() => this.switchView("leaderboard")}>Leaderboard</button>
          <button onClick = {() => this.switchView("new poll")}>Post question</button>
        </div>
        
        {authedUser && view === 'new poll' && <NewPoll/>}
        {authedUser && view === 'leaderboard' && <LeaderBoard />}
        {authedUser && view === 'home' && (
          <>
            <h2>Polls</h2>
            <PollsList />
          </>
        )}
        <div style = {{ height: '128px', width: '128px', borderRadius: '50%', backgroundImage: this.props.users['sarahedo'] ? `url("${this.props.users['sarahedo'].avatarURL}")` : 'none'}} >
        </div>
      </div>
    );
  };
};

const mapStateToProps = ({authedUser, users}) => ({authedUser, users});



export default connect(mapStateToProps, {handleInitialData, handleLogin, handleLogout})(App);
