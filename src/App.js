import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleInitialData, handleLogin} from './actions';

import {Route, Redirect, Switch} from 'react-router-dom';
import Leaderboard from './containers/Leaderboard';
import PollsList from './containers/PollsList';
import NewPoll from './containers/NewPoll';
import Poll from './containers/Poll';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import { handleRegister } from './actions';

const PrivateRoute = ({ component: PassedComponent, authedUser, ...rest }) =>(
    <Route
      {...rest}
      render={({ location, match }) => authedUser ? <PassedComponent match = {match}/> : <Redirect to = {{pathname: '/login', state: { from: location }}}/>}
    />
);

class App extends Component {

  componentDidMount() {
    this.props.handleInitialData();
  };

  render() {
    let {authedUser, handleLogin, handleRegister} = this.props;
    return (
      <div style = {{textAlign: 'center'}}>
        <Switch>
          <PrivateRoute authedUser = {authedUser} exact path = '/' component = {PollsList} />
          <PrivateRoute authedUser = {authedUser} path = '/leaderboard' component = {Leaderboard} />
          <PrivateRoute authedUser = {authedUser} path = '/add' component = {NewPoll} />
          <PrivateRoute authedUser = {authedUser} path = '/question/:id' component = {Poll} />
          <Route path = '/login' render = {() => (
            <Login
              authedUser = {authedUser}
              handleLogin = {handleLogin}
            />
          )}/>
          <Route path = '/register' render = {() => (
            <Register
              authedUser = {authedUser}
              handleRegister = {handleRegister}
            />
          )} />
          <Route path='*' component = {PageNotFound}/>
        </Switch>
      </div>
    );
  };
};

const mapStateToProps = ({authedUser}) => ({authedUser});

export default connect(mapStateToProps, {handleInitialData, handleLogin, handleRegister})(App);
