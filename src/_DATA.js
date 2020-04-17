import avatarPic from './user-avatar.png';

let users = {
  elsiefoster: {
    id: 'elsiefoster',
    name: 'Elsie Foster',
    avatarURL: 'https://randomuser.me/api/portraits/women/49.jpg',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      'am8ehyc8byjqgar0jgpub9': 'optionTwo',
      'loxhs1bqm25b708cmbf3g': 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  owenwest: {
    id: 'owenwest',
    name: 'Owen West',
    avatarURL: 'https://randomuser.me/api/portraits/men/10.jpg',
    answers: {
      'vthrdm985a262al8qx3do': 'optionOne',
      'xj352vofupe1dqz9emx13r': 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  andreahart: {
    id: 'andreahart',
    name: 'Andrea Hart',
    avatarURL: 'https://randomuser.me/api/portraits/women/35.jpg',
    answers: {
      'xj352vofupe1dqz9emx13r': 'optionOne',
      'vthrdm985a262al8qx3do': 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
};

let questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'elsiefoster',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['elsiefoster'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'andreahart',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['andreahart', 'elsiefoster'],
      text: 'become a supervillain'
    }
  },
  'am8ehyc8byjqgar0jgpub9': {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'elsiefoster',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['elsiefoster'],
      text: 'be telepathic'
    }
  },
  'loxhs1bqm25b708cmbf3g': {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'owenwest',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['elsiefoster'],
      text: 'be a back-end developer'
    }
  },
  'vthrdm985a262al8qx3do': {
    id: 'vthrdm985a262al8qx3do',
    author: 'owenwest',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['owenwest'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['andreahart'],
      text: 'have your best friend find $500'
    }
  },
  'xj352vofupe1dqz9emx13r': {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'andreahart',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['andreahart'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['owenwest'],
      text: 'write Swift'
    }
  },
};

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000);
  });
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000);
  });
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  };
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const {author, optionOneText, optionTwoText} = question;
    if (!optionOneText || !optionTwoText || !author) {
      rej(new Error('Missing field'));
    }
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      };

      users = {
        ...users,
        [author]: {
          ...users[author],
          questions: users[author].questions.concat([formattedQuestion.id])
        }
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      };

      res();
    }, 500);
  });
}

export function _removeAnswer ({ authedUser, qid }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const { [qid]: pollToRemove, ...pollsToKeep } = users[authedUser].answers;
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: pollsToKeep
        }
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          optionOne: {
            ...questions[qid]['optionOne'],
            votes: questions[qid]['optionOne'].votes.filter(userId => userId !== authedUser)
          },
          optionTwo: {
            ...questions[qid]['optionTwo'],
            votes: questions[qid]['optionTwo'].votes.filter(userId => userId !== authedUser)
          },

        }
      };

      res();
    }, 500);
  });
}

export function _saveNewUser ( id, name ) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!id || !name) {
        return rej(new Error('Missing Field'));
      }
      if (Object.keys(users).includes(id)) {
        return rej(new Error('Username taken'));
      }

      const newUser = {
        id,
        name,
        avatarURL: avatarPic,
        answers: {},
        questions: []
      };

      users = {
        ...users,
        [id]: newUser
      };

      res(newUser);
    }, 500);
  });
}