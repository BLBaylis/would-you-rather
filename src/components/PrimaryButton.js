import React from 'react'

const defaultStyles = {
  border: 'none', 
  padding: '12px 16px',
  cursor: 'pointer',
  backgroundColor : '#0facf3',
  borderRadius: '6px',
  color: '#fff',
  fontWeight: '600',
  fontSize: '1.1rem'
}

const PrimaryButton = ({children, onClick, styles, ...otherProps}) => (
  <button onClick = {onClick} style = {{...defaultStyles, ...styles}} {...otherProps}>{children}</button>
)

export default PrimaryButton
