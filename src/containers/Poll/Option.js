import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import VoteStatistics from './VoteStatistics';

const Option = ({ option, optionObj, pollId, dispatches, authedUser, authedUserVote }) => {

  const createClickHandler = () => {
    const {handleInitialVote, changePollAnswer, handleRemoveVote} = dispatches;
    if (!authedUserVote) {
      return () => handleInitialVote(authedUser, pollId, option);
    } else if (authedUserVote === option) {
      return () => handleRemoveVote(authedUser, pollId);
    } else {
      return () => changePollAnswer(authedUser, pollId, option);
    }
  };

  return (
    <>
      <PrimaryButton styles = {{minWidth: '250px', margin: '10px'}} onClick = {createClickHandler()}>...{optionObj[option].text}</PrimaryButton>
      {authedUserVote && <VoteStatistics option = {option} optionObj = {optionObj} />}
    </>
  );
};

export default Option;