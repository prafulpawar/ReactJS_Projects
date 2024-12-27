import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav flex justify-between p-2'>
       <h2 >Sheriyansh</h2>
          <div className='flex gap-10 '>
          <Link to='/'> Home </Link>
          <Link to='/about'> About </Link>
          <Link to='/contact'> Contact  </Link>
          <Link to='/products'> Product </Link>
          </div>
        
    </div>
  )
}

export default Nav