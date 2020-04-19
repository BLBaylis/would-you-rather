import React from 'react';
import { connect } from 'react-redux';
import { handleInitialVote, changePollAnswer, handleRemoveVote } from '../../actions';

import AuthorSection from '../../components/AuthorSection';
import QuestionSubmissionInfo from '../../components/QuestionSubmissionInfo';
import QuestionInfo from '../../components/QuestionInfo';
import Page from '../../components/Page';
import Card from '../../components/Card';
import Option from './Option';
import AuthedUserVoteDisplay from './AuthedUserVoteDisplay';

const Poll = ({ authedUser, users, id, poll, match, ...dispatches }) => {
  const {author, timestamp, optionOne, optionTwo} = poll;
  const authorUser = users[author];
  const authedUserVote  = users[authedUser].answers[id] || null;
  const optionObj = {optionOne, optionTwo};
  return (
    <Card styles = {{ display: 'inline-block', marginTop: '7.5rem'}}>
      <div style = {{display: 'inline-flex', color: '#444'}}>
        <AuthorSection avatarURL = {authorUser.avatarURL} >
          <QuestionSubmissionInfo name = {authorUser.name} timestamp = {timestamp}/>
        </AuthorSection>
        <QuestionInfo
          optionOneChild = {() => (
            <Option
              option = 'optionOne'
              optionObj = {optionObj}
              pollId = {id}
              dispatches = {dispatches}
              authedUser = {authedUser}
              authedUserVote = {authedUserVote}
            />
          )}
          optionTwoChild = {() => (
            <Option
              option = 'optionTwo'
              optionObj = {optionObj}
              pollId = {id}
              dispatches = {dispatches}
              authedUser = {authedUser}
              authedUserVote = {authedUserVote}
            />
          )}
        />
      </div>
      {authedUserVote && <AuthedUserVoteDisplay choice = {poll[authedUserVote].text}/>}
    </Card>
  );
};

const mapStateToProps = ({authedUser, users}) => ({authedUser, users});

const ConnectedPoll = connect(mapStateToProps, { handleInitialVote, changePollAnswer, handleRemoveVote })(Poll);

export default props => <Page><ConnectedPoll {...props}/></Page>;