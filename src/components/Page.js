import React from 'react'
import Nav from "./Nav"

const Page = ({ children }) => {
  return (
    <div> 
      <Nav/>
      {children}
    </div>
  )
}

export default Page
