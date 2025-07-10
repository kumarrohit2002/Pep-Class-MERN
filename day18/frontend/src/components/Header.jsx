import React, { useContext } from 'react'
import { Link } from 'react-router';
import { MyContext } from '../context/Mycontext';

const Header = () => {
  const {count}=useContext(MyContext);
  return (
    <div className='py-4 px-6 flex justify-between items-center bg-amber-100 shadow-md'> {/* Added items-center and shadow-md */}
      <Link to={'/'} className='font-bold text-emerald-600 text-2xl'>Shopping App</Link> {/* Increased font size slightly */}

      <div className='flex gap-2 items-center'> {/* Added items-center */}
        <input
          className='border border-gray-300 py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-64' // Improved input styles
          type="text"
          placeholder='Search product...'
        />
        <button
          className='bg-emerald-500 text-white py-1 px-4 rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out' // Improved button styles
        >
          Search
        </button>
      </div>

      <div className='flex gap-4'> {/* Increased gap between links */}
        <Link to={'/profile'} className='text-emerald-700 hover:text-emerald-900 text-lg font-medium transition duration-300 ease-in-out '>Profile</Link>
        <Link to={'/signup'} className='text-emerald-700 hover:text-emerald-900 text-lg font-medium transition duration-300 ease-in-out'>Signup</Link>
        <p>value: {count}</p>
      </div>
    </div>
  )
}

export default Header;