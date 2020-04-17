import React from 'react';
import AuthorSection from './AuthorSection';
import Card from './Card';

const User = ({ name, position, questions, answers, avatarURL, total }) => {
  const colours = ['#ffd700', '#b5b5bd', '#9c5521', '#0facf3'];
  const panelColour = position < 4 ? colours[position - 1] : colours[3];
  return (
    <Card styles = {{
      display: 'inline-flex',
      flexWrap: 'flex',
      margin: '1.5rem',
      color: '#fff',
      fontWeight: 600
    }}>
      <div style = {{
        width: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: panelColour,
        padding: '2rem',
        fontSize: '1.5rem',
      }}>{position}</div>
      <AuthorSection avatarURL = {avatarURL} styles = {{
        backgroundColor: panelColour,
        paddingLeft: 0,
        paddingRight: 0,
      }}/>
      <div style = {{
        padding: '2rem',
        backgroundColor: panelColour
      }}>
        <h2>{name}</h2>
        <p>Answered questions: {Object.keys(answers).length}</p>
        <p>Created questions: {questions.length}</p>
        <p>Total: {total}</p>
      </div>
    </Card>
  );
};

export default User;
