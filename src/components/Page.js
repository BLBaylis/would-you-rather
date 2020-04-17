import React from 'react'
import Header from "../containers/Header"

const Page = ({ children }) => {
  return (
    <div> 
      <Header/>
      {children}
    </div>
  )
}

export default Page
