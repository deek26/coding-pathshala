import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function MyAccount() {
  return (
    <div>

      <div className='flex flex-col justify-center items-center space-y-11'>
          <h1 className=' text-3xl mt-6'>Customer Login </h1>
          <button className='bg-blue-900 text-white p-2 rounded flex items-center'>
          <FaFacebookF className='cursor-pointer h-6 w-6 mr-3'/>
            SIGN IN WITH FACEBOOK
          
          </button>
      </div>


      <div className='flex justify-around my-20'>
        <div className='w-[30%] border-2 border-gray-200 shadow-md p-2'>
          <h1 className='font-semibold text-2xl'>Registered Customers</h1>
          <p className='text-gray-500 text-sm  p-2'>If you have an account, sign in with your email address.</p>
          <p>Email <span className='text-red-700'>*</span></p>
          <input type='email' className='border-gray-100 border-2 w-full h-10 my-2'/>
          <p>Password <span className='text-red-700'>*</span></p>
          <input type='password' className='border-gray-100 border-2 w-full h-10 my-2'/>
          <div>
            <input type='checkbox' className='' /> Show Password
          </div>
          <p className='my-2 text-gray-500 text-sm '>Please type the letters and numbers below <span className='text-red-700'>*</span></p>
          
          <input type="text"  className='border-gray-100 border-2 w-full h-10 my-2'/>
          <div className=' flex w-full h-10 my-2 '>
              <div className='w-[50%]'>IMAGE</div>
              <button className=' bg-yellow-300 w-[50%] font-semibold rounded' >RELOAD CAPTCHA</button> 
          </div>
          <p className='text-gray-500 my-2'> * Attention:Captcha is case sensitive.</p>
          <div className='float-right m-4'>
            <Link to='/forgot-password' >Forgot Your Password?</Link>
          </div>
          
          <button className=' bg-yellow-300  w-full h-10 font-semibold rounded'>SIGN IN</button>
          <p className='text-red-600 text-sm'>* Required Fields</p>

        </div>

        <div>
        <div className=''>
          <h1 className='font-semibold text-2xl'>New Customers</h1>
          <p className='text-gray-400 text-sm py-2'>Creating an account has many benefits : check out faster, keep more <br />
          than one address, track orders and more.</p>
          <div className='my-3'>
          <button className=' bg-yellow-300  w-full font-semibold rounded py-3'><Link to='/signup'>CREATE AN ACCOUNT</Link></button>
          </div>
          
        </div>

      </div>



      
     
      </div>

    </div>
  )
}
