import React, {Component} from 'react'
import {connect} from 'react-redux'

import Poll from "./Poll";
import PollPreview from './PollPreview'


class PollsList extends Component {

  state = {
    showUnanswered: true
  }

  toggleShowUnanswered = () => this.setState(({ showUnanswered }) => ({ showUnanswered: !showUnanswered }))

  render() {
    const {polls, users, authedUser} = this.props;
    const {showUnanswered} = this.state;
    const answeredIds = users[authedUser] ? Object.keys(users[authedUser].answers) : [];
    const pollsToRender = showUnanswered ? Object.values(polls).filter(poll => !answeredIds.includes(poll.id)) : answeredIds.map(id => polls[id])
    return (
      <>
        <button onClick = {this.toggleShowUnanswered}>{showUnanswered ? 'Answered' : 'Unanswered'}</button>
        {null && <div>{polls && users && pollsToRender.map(poll => <Poll key = {poll.id} poll = {{...poll, author: users[poll.author]}} />)}</div>}
        <div>{polls && users && pollsToRender.map(poll => (
          <PollPreview 
            key = {poll.id} 
            poll = {poll} 
          />
        ))}
        </div>
      </>
    )
  }
}

const mapStateToProps = ({polls, users, authedUser}) => ({polls, users, authedUser});

export default connect(mapStateToProps)(PollsList);
