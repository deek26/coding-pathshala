import React from 'react'
import {Link} from 'react-router-dom'

export default function Partners() {
  return (
    <div>
      <div className='ml-20 mt-14 text-md'>
            <Link to={'/home' } className='hover:underline text-gray-600' >Home</Link>
            <span> > </span>
            <span> Partners </span>
        </div>

        <img src='parnters.png' className='m-auto'/>
    </div>
  )
}
