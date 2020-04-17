import React, {Component} from 'react';
import {connect} from 'react-redux';

import Poll from './Poll';
import PollPreview from '../components/PollPreview';
import Page from '../components/Page';
import PrimaryButton from '../components/PrimaryButton';

class PollsList extends Component {

  state = {
    showUnanswered: true
  }

  toggleShowUnanswered = () => this.setState(({ showUnanswered }) => ({ showUnanswered: !showUnanswered }))

  render() {
    const {polls, users, authedUser} = this.props;
    const {showUnanswered} = this.state;
    const answeredIds = users[authedUser] ? Object.keys(users[authedUser].answers) : [];
    const pollsToRender = showUnanswered ? Object.values(polls).filter(poll => !answeredIds.includes(poll.id)) : answeredIds.map(id => polls[id]);
    const sortedPolls = pollsToRender.sort((a, b) => b.timestamp - a.timestamp);
    return (
      <>
        <h1>Questions</h1>
        <PrimaryButton onClick = {this.toggleShowUnanswered}>Show {showUnanswered ? 'answered' : 'unanswered'} questions</PrimaryButton>
        {null && <div>{polls && users && pollsToRender.map(poll => <Poll key = {poll.id} poll = {{...poll, author: users[poll.author]}} />)}</div>}
        <div>{polls && users && sortedPolls.map(poll => (
          <PollPreview
            users = {users}
            key = {poll.id}
            poll = {poll}
          />
        ))}
        {!sortedPolls.length && showUnanswered && <p>No questions left to answer!</p>}
        {!sortedPolls.length && !showUnanswered && <p>You haven't answered any questions!</p>}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({polls, users, authedUser}) => ({polls, users, authedUser});

const ConnectedPollList = connect(mapStateToProps)(PollsList);

export default props => <Page><ConnectedPollList {...props}/></Page>;
