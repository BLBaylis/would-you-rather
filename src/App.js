import React, { Component } from 'react';
import {connect} from 'react-redux'

import {handleInitialData} from './actions'
import './App.css';

class App extends Component {

  state = {
    showPolls: false,
    showUsers: true
  }

  componentDidMount() {
    this.props.handleInitialData();
  };

  render() {
    const {showPolls, showUsers} = this.state;
    const {polls, users} = this.props;
    return (
      <div className="App">
        {showPolls && (
          <>
            <h2>Polls</h2>
            {Object.keys(polls).map(id => {
              const {author, timestamp, optionOne, optionTwo} = polls[id]
              return (
                <>
                  <h3 key = {`${id}-1`}>{id}</h3>
                  <p key = {`${id}-2`}>{author}</p>
                  <p key = {`${id}-3`}>{timestamp}</p>
                  <p key = {`${id}-4`}>{optionOne.text}</p>
                  <p key = {`${id}-5`}>{optionOne.votes}</p>
                  <p key = {`${id}-6`}>{optionTwo.text}</p>
                  <p key = {`${id}-7`}>{optionTwo.votes}</p>
                </>
              )
            })}
          </>
          )
        }
        <button onClick = {() => this.setState(({ showPolls }) => ({showPolls: !showPolls}))}>Toggle Polls</button>
        {showUsers && (
          <>
            <h2>Users</h2>
            {Object.keys(users).map(username => {
              const {id, name, answers, questions} = users[username]
              return (
                <>
                  <h3 key = {`${username}-1`}>{id}</h3>
                  <p key = {`${username}-2`}>{name}</p>
                  <p key = {`${username}-4`}>{Object.keys(answers).reduce((tot, curr) => `${tot}, ${curr}`)}</p>
                  <p key = {`${username}-5`}>{Object.keys(questions).reduce((tot, curr) => `${tot}, ${questions[curr]}`, '')}</p>
                </>
              )
            })}
          </>
          )
        }
        <button onClick = {() => this.setState(({ showUsers }) => ({showUsers: !showUsers}))}>Toggle Users</button>
      </div>
    );
  };
};

const mapStateToProps = ({polls, users}) => ({polls, users});

export default connect(mapStateToProps, {handleInitialData})(App);
