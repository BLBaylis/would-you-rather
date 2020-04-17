import React from 'react';

const defaultStyles = {
  boxShadow: '0 29px 32px -20px rgba(0,0,0,0.35)',
  color: '#444'
};

const Card = ({children, styles}) => <div style = {{...defaultStyles, ...styles}}>{children}</div>;

export default Card;
