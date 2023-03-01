import React from 'react'
import { Link } from 'react-router-dom'

export default function ExamCombos() {
  return (
    <div>
      <div className='ml-20 mt-14 text-md'>
            <Link to={'/home' } className='hover:underline text-gray-600' >Home</Link>
            <span> &#62; </span>
            <Link to={'/our-products' } className='hover:underline text-gray-600' >Our Products</Link>
            <span> &#62; </span>
            <span> Exam Combos </span>
        </div>
    </div>
  )
}
