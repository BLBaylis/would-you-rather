import React from 'react';
import Avatar from './Avatar';

const AuthorSection = ({ children, avatarURL, styles }) => {
  return (
    <div style = {{
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#0facf3',
      color: '#fff',
      fontWeight: '600',
      ...styles
    }}>
      {children}
      <Avatar url = {avatarURL}/>
    </div>
  );
};

export default AuthorSection;
