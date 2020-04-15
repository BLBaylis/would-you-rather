import React, { Component } from 'react';
import {connect} from 'react-redux'
import {handleInitialData, handleLogin, handleLogout} from './actions'

import {Route, Link, Redirect, Switch} from 'react-router-dom'
import LeaderBoard from './components/LeaderBoard'
import PollsList from './components/PollsList'
import NewPoll from './components/NewPoll';
import Poll from './components/Poll'
import Login from './components/Login'
import Register from './components/Register'
import './App.css';
import { handleRegister } from './actions'

const PrivateRoute = ({ component: PassedComponent, authedUser, ...rest }) =>{console.log(rest);return  (
    <Route
      {...rest}
      render={({ location, match }) => authedUser ? <PassedComponent match = {match}/> : <Redirect to = {{pathname: "/login", state: { from: location }}}/>}
    />
  )}

class App extends Component {

  componentDidMount() {
    this.props.handleInitialData();
  };

  render() {
    const {authedUser, users, handleLogin, handleLogout, handleRegister} = this.props;
    return (
      <div className="App">
        {authedUser && (
          <div>
            <p>{authedUser && users[authedUser] && `Logged in as ${users[authedUser].name}`}</p>
            {authedUser && <button onClick = {handleLogout}>Log out</button>}
            <Link to = "/">Home</Link>
            <Link to = "/leaderboard">Leaderboard</Link>
            <Link to = "/new">Post question</Link>
          </div>
        )}
        <Switch>
          <PrivateRoute authedUser = {authedUser} exact path = '/' component = {PollsList} />
          <PrivateRoute authedUser = {authedUser} path = '/leaderboard' component = {LeaderBoard} />
          <PrivateRoute authedUser = {authedUser} path = '/new' component = {NewPoll} />
          <PrivateRoute authedUser = {authedUser} path = '/question/:id' component = {Poll} />
          <Route path = '/login' render = {() => <Login authedUser = {authedUser} handleLogin = {handleLogin}/>} />
          <Route path = '/register' render = {() => <Register authedUser = {authedUser} handleRegister = {handleRegister}/>} />
        </Switch>
      </div>
    );
  };
};

const mapStateToProps = ({authedUser, users}) => ({authedUser, users});

export default connect(mapStateToProps, {handleInitialData, handleLogin, handleLogout, handleRegister})(App);
