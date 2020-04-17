import React from 'react'

const Avatar = ({ url }) => (
  <img 
    width = '128px' 
    height = '128px' 
    src = {url} 
    alt = '' 
    style = {{
      borderRadius: '50%',
      border: '5px solid #fff'
    }}
  />
)

export default Avatar
