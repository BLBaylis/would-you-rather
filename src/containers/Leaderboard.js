import React from 'react';
import {connect} from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';

const createLeaderboard = users => {

  const getUserTotal = ({ answers, questions }) => Object.keys(answers).length + questions.length;

  const addTotalToUser = user => ({...user, total: getUserTotal(user)});

  const leaderboard = Object.values(users).map(addTotalToUser);
  const sortedLeaderboard = leaderboard.sort((a, b) => b.total - a.total);
  return sortedLeaderboard.reduce((leaderboard, user, index) => {
    if (index === 0) {
      return leaderboard.concat({...user, position: 1});
    }
    const previousUser = leaderboard[index - 1];
    if (previousUser.total === user.total) {
      return leaderboard.concat({...user, position: previousUser.position});
    } else {
      return leaderboard.concat({...user, position: previousUser.position + 1});
    }
  }, []);
};

const Leaderboard = ({ users }) => {
  const leaderboard = createLeaderboard(users);
  return (
    <div>
      <h1>Leaderboard</h1>
      {leaderboard.map(({id, name, avatarURL, total, position, questions, answers}) => (
        <User
          key = {id}
          name = {name}
          position = {position}
          avatarURL = {avatarURL}
          answers = {answers}
          total = {total}
          questions = {questions}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({users}) => ({users});

const ConnectedLeaderboard = connect(mapStateToProps)(Leaderboard);

export default props => <Page><ConnectedLeaderboard {...props}/></Page>;
