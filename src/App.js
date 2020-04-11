import React, { Component } from 'react';
import {connect} from 'react-redux'

import PollsList from './components/PollsList'
import {handleInitialData, handleLogin, handleLogout} from './actions'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.handleInitialData();
    this.props.handleLogin('owenwest');
  };

  render() {
    const {authedUser, handleLogin, handleLogout} = this.props;
    return (
      <div className="App">
        <p>{authedUser ? `Logged in as ${authedUser}` : 'Logged out'}</p>
        {authedUser ? <button onClick = {handleLogout}>Log out</button> : <button onClick = {() => handleLogin('owenwest')}>Log In</button>}
        {authedUser && (
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
