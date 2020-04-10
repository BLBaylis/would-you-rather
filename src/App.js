import React, { Component } from 'react';
import {connect} from 'react-redux'

import {handleInitialData} from './actions'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.handleInitialData();
  };

  render() {
    const {polls} = this.props;
    return (
      <div className="App">
        {Object.keys(polls).map(id => {
          const {author, timestamp, optionOne, optionTwo} = polls[id]
          return (<>
            <h3 key = {`${id}-1`}>{id}</h3>
            <p key = {`${id}-2`}>{author}</p>
            <p key = {`${id}-3`}>{timestamp}</p>
            <p key = {`${id}-4`}>{optionOne.text}</p>
            <p key = {`${id}-5`}>{optionOne.votes}</p>
            <p key = {`${id}-6`}>{optionTwo.text}</p>
            <p key = {`${id}-7`}>{optionTwo.votes}</p>
          </>)
        })}
      </div>
    );
  };
};

const mapStateToProps = ({polls}) => ({polls});

export default connect(mapStateToProps, {handleInitialData})(App);
