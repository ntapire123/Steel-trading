import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
   <>
   <h1>404 Error!</h1>
   <p>It seems the page you are trying to search is not here</p>
   <Link to={"/"}>Go Home</Link>
   </>
  )
}

export default NotFound