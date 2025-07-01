import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div>
        <h1>Not Found Page</h1>
        <Link to={'/'}>Home Page</Link>
    </div>
  )
}

export default NotFoundPage