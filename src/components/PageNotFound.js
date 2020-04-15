import React from 'react'
import {Link} from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <p>Sorry, this page doesn't exist</p>
      <Link to = "/">Return to Home</Link>
    </>
  )
}

export default PageNotFound
