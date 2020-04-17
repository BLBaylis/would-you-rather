import React from 'react';

const VoteStatistics = ({option, optionObj}) => {
  const otherOption = option === 'optionOne' ? 'optionTwo' : 'optionOne'
  const optionVotesCount = optionObj[option].votes.length
  const total = optionVotesCount + optionObj[otherOption].votes.length;
  const percentage = Number(optionVotesCount/total * 100).toFixed(2);

  return <span>{percentage}% - {optionVotesCount} out of {total}</span>
}

export default VoteStatistics