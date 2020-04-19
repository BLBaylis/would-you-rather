import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleLogin, handleRegister} from './actions';

import {Route, Redirect, Switch} from 'react-router-dom';
import Leaderboard from './containers/Leaderboard';
import PollsList from './containers/PollsList';
import NewPoll from './containers/NewPoll';
import Poll from './containers/Poll';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';

const PrivateRoute = ({ component: PassedComponent, render, authedUser, ...rest }) => {
  const renderFn = PassedComponent ? (match => <PassedComponent match = {match}/>) : render;
  return (
    <Route
      {...rest}
      render={({ location, match }) => authedUser ? renderFn(match) : <Redirect to = {{pathname: '/login', state: { from: location }}}/>}
    />
  );
};

class App extends Component {

  render() {
    let {authedUser, polls,  handleLogin, handleRegister} = this.props;
    return (
      <div style = {{textAlign: 'center'}}>
        <Switch>
          <PrivateRoute authedUser = {authedUser} exact path = '/' component = {PollsList} />
          <PrivateRoute authedUser = {authedUser} path = '/leaderboard' component = {Leaderboard} />
          <PrivateRoute authedUser = {authedUser} path = '/add' component = {NewPoll} />
          <PrivateRoute authedUser = {authedUser} path = '/question/:id' render = {match => {
              const id = match.params.id;
              return polls[id] ? <Poll poll = {polls[id]} id = {id} /> : <PageNotFound/>;
            }}
          />
          <Route path = '/login' render = {({ location }) => (
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

const mapStateToProps = ({authedUser, polls}) => ({authedUser, polls});

export default connect(mapStateToProps, {handleLogin, handleRegister})(App);
