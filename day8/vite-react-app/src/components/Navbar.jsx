import React from 'react'
import './Navbar.css'
import SearchBox from './SearchBox';

const NAvbar = () => {
  return (
    <div className='navbar-container'>
       <a>Home</a>
       <SearchBox/>
       <a>Help</a>
    </div>
  )
}

export default NAvbar;