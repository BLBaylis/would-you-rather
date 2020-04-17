import React from 'react';

import AuthorSection from './AuthorSection';
import QuestionSubmissionInfo from './QuestionSubmissionInfo';
import { Link } from 'react-router-dom';
import Card from './Card';
import PrimaryButton from './PrimaryButton';
import QuestionInfo from './QuestionInfo';

const cardStyles = {
  display: 'inline-flex',
  flexWrap: 'flex',
  margin: '1.5rem'
};

const PollPreview = ({ users, poll }) => {
  const {author, timestamp, optionOne, optionTwo, id: pollId} = poll;
  if (!author || !users[author]) {
    return null;
  }
  const authorUser = users[author];
  return (
    <Card styles = {cardStyles}>
      <AuthorSection avatarURL = {authorUser.avatarURL} >
        <QuestionSubmissionInfo name = {authorUser.name} timestamp = {timestamp}/>
      </AuthorSection>
      <QuestionInfo
        optionOneChild = {() => <span style = {{ width: '250px'}}>...{optionOne.text}</span>}
        optionTwoChild = {() => <span style = {{ width: '250px'}}>...{optionTwo.text}</span>}
      >
        <Link to = {`question/${pollId}`}>
          <PrimaryButton styles = {{width: '100%'}}>Details</PrimaryButton>
        </Link>
      </QuestionInfo>

    </Card>
  );
};

export default PollPreview;
