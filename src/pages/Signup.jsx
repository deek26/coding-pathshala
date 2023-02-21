import React from 'react'
import {MdOutlineCreateNewFolder,MdClose} from 'react-icons/md'


export default function Signup() {
  return (
    <div className='w-[40%] m-auto my-32'>
      <div className='flex items-center justify-between bg-black text-white font-bold p-3 text-2xl my-8'>
        <div className='flex items-center space-x-2'>
          <MdOutlineCreateNewFolder/>
          <h1>Create New Account</h1>
        </div>
          <MdClose/>
      </div>
      
      <p className='text-lg'>First Name <span className='text-red-700'>*</span></p>
      <input type='text' className='border-gray-100 border-2 w-full my-2 py-3' />

      <p className='text-lg'>Last Name <span className='text-red-700'>*</span></p>
      <input type='text' className='border-gray-100 border-2 w-full my-2 py-3' />

      <p className='text-lg'>Email <span className='text-red-700'>*</span></p>
      <input type='email' className='border-gray-100 border-2 w-full my-2 py-3' />

      <div className='flex space-x-3'>
        <p className='text-lg'>Sign Up for Newsletter</p>
        <input type='checkbox' />
      </div>
      
      <p className='text-lg'>Password<span className='text-red-700'>*</span></p>
      <input type='password' className='border-gray-100 border-2 w-full my-2 py-3' />

      <p className='my-2 text-lg '>Please type the letters and numbers below <span className='text-red-700'>*</span></p>    
      <input type="text"  className='border-gray-100 border-2 w-full h-10 my-2'/>

      <div className=' flex w-full h-10 my-2 '>
        <div className='w-[50%]'>IMAGE</div>
          <button className='bg-[#e0ff56] w-[50%] font-semibold rounded' >RELOAD CAPTCHA</button> 
      </div>
        <p className='text-gray-500 my-2'> * Attention:Captcha is case sensitive.</p>
      

      <div className='flex space-x-6'>
        <button className='text-white bg-black py-2 rounded w-[50%] h-12 font-bold'>Create An Account</button>
        <button className='bg-[#e0ff56] py-2 rounded w-20 font-semibold'>Back</button>
      </div>


    </div>

  )
}
