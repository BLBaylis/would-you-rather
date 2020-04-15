import React, { Component } from 'react';
import {connect} from 'react-redux'
import {handleInitialData, handleLogin, handleLogout} from './actions'

import {Route, Redirect, Switch} from 'react-router-dom'
import LeaderBoard from './components/LeaderBoard'
import PollsList from './components/PollsList'
import NewPoll from './components/NewPoll';
import Poll from './components/Poll'
import Login from './components/Login'
import Register from './components/Register'
import PageNotFound from './components/PageNotFound'
import './App.css';
import { handleRegister } from './actions'

const PrivateRoute = ({ component: PassedComponent, authedUser, ...rest }) =>(
    <Route
      {...rest}
      render={({ location, match }) => authedUser ? <PassedComponent match = {match}/> : <Redirect to = {{pathname: "/login", state: { from: location }}}/>}
    />
)

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
          </div>
        )}
        <Switch>
          <PrivateRoute authedUser = {authedUser} exact path = '/' component = {PollsList} />
          <PrivateRoute authedUser = {authedUser} path = '/leaderboard' component = {LeaderBoard} />
          <PrivateRoute authedUser = {authedUser} path = '/new' component = {NewPoll} />
          <PrivateRoute authedUser = {authedUser} path = '/question/:id' component = {Poll} />
          <Route path = '/login' render = {({location}) => (
            <Login 
              authedUser = {authedUser} 
              handleLogin = {handleLogin}
              location = {location}
            />
          )}/>
          <Route path = '/register' render = {({location}) => (
            <Register 
              authedUser = {authedUser} 
              handleRegister = {handleRegister}
              location = {location}
            />
          )} />
          <Route path='*' component = {PageNotFound}/>
        </Switch>
      </div>
    );
  };
};

const mapStateToProps = ({authedUser, users}) => ({authedUser, users});

export default connect(mapStateToProps, {handleInitialData, handleLogin, handleLogout, handleRegister})(App);
