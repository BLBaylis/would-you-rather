import React, { Component } from 'react';
import {connect} from 'react-redux'
import {handleInitialData, handleLogin, handleLogout} from './actions'

import {Route, Link} from 'react-router-dom'
import LeaderBoard from './components/LeaderBoard'
import PollsList from './components/PollsList'
import NewPoll from './components/NewPoll';
import Poll from './components/Poll'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.handleInitialData();
    this.props.handleLogin('owenwest');
  };

  render() {
    const {authedUser, users, handleLogin, handleLogout} = this.props;
    return (
      <div className="App">
        <div>
          <p>{authedUser ? `Logged in as ${users[authedUser].name}` : 'Logged out'}</p>
          {authedUser ? <button onClick = {handleLogout}>Log out</button> : <button onClick = {() => handleLogin('owenwest')}>Log In</button>}
        </div>
        <div>
          <Link to = "/">Home</Link>
          <Link to = "/leaderboard">Leaderboard</Link>
          <Link to = "/new">Post question</Link>
        </div>
        <Route exact path = '/' component = {PollsList} />
        <Route path = '/leaderboard' component = {LeaderBoard} />
        <Route path = '/new' component = {NewPoll} />
        <Route path = '/question/:id' component = {Poll} />
      </div>
    );
  };
};

const mapStateToProps = ({authedUser, users}) => ({authedUser, users});

export default connect(mapStateToProps, {handleInitialData, handleLogin, handleLogout})(App);
