import React from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <Link to={'/search'}>Search Page</Link>
        <br />
        <Link to={'/view'}>View Page</Link>
    </div>

  )
}

export default HomePage