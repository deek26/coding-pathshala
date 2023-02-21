import React from 'react'
import { Link } from 'react-router-dom'
import {GrMap} from 'react-icons/gr'

export default function Tracking() {
  return (
    <div>
        <div className='mt-20 ml-20'>
            <Link to={'/home' } className='hover:underline text-gray-600' >Home</Link>
            <span> > </span>
            <span> tracking </span>
        </div>  
      <h1 className='text-4xl font-semibold text-center my-8 text-[#1c3755]'>Tracking</h1> 

      <div className='border-2 border-gray-300 w-[80%] m-auto p-4 mb-20 rounded space-y-8 shadow-lg px-7'>
        <div className='flex space-x-3 items-center'>
          <GrMap className='text-4xl'/>
          <p className='text-2xl font-semibold'>Track status of your shipment</p>
        </div>

          <hr />

        <div className='flex space-x-4 text-lg items-center'>
          <p className='font-bold'>Search By:</p>
          <input type='radio' name='search' checked/>
          <p>Order ID</p>
          <input type='radio' name='search' />
          <p>AWB</p>
        </div>

        <input type='text' placeholder='Enter Order ID to search ' className='text-lg w-[50%] p-3 border-2 border-gray-300 rounded'/>
        <br />
        <input type='tel' placeholder='Enter Mobile number to search ' className='text-lg w-[50%] p-3 border-2 border-gray-300 rounded'/>
        <br />
        
        <button className='bg-[#e1f148] w-[12%] font-bold rounded p-3 my-10 text-[#17552c] text-lg '>SUBMIT</button>

      </div>
       
    </div>
  )
}
