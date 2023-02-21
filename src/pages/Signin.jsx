import React from 'react'
import {AiOutlineLogin} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'

export default function Signin() {
  return (
    <div className='w-[40%] m-auto my-32'>
      <div className='flex items-center justify-between bg-black text-white font-bold p-3 text-2xl'>
          <div className='flex items-center space-x-2'>
            <AiOutlineLogin />
            <h1 >Sign In</h1>
          </div>
            <RxCross2 />
      </div>
      <div>
          <div>
            <div className='flex justify-between'>
              <p className='my-4 border-b border-gray-300 pb-3 text-lg'>Registered Customers</p>
              <p className='my-4 border-b border-gray-300 pb-3 text-lg'>Or Sign In With</p>
            </div>

            <div className='flex justify-between'>
                <p className='text-lg'>Email<span className='text-red-700'>*</span></p>
                <button className='bg-blue-900 text-white p-2 rounded flex items-center'>
                      <FaFacebookF className='cursor-pointer h-6 w-6 mr-3 text-lg'/>
                        SIGN IN WITH FACEBOOK
                </button>   
            </div>


            <input type='email' className='border-gray-100 border-2 w-full my-2 py-3' />
            
            <p className='text-lg'>Password<span className='text-red-700'>*</span></p>
            <input type='password' className='border-gray-100 border-2 w-full my-2 py-3' />

            <p className='text-lg'>Please type the letters and numbers below <span className='text-red-700'>*</span></p>
              <input type='text' className='border-gray-100 w-full border-2 my-2 py-3'/>

            <div className=' flex w-full h-10 my-2 '>
                <div className='w-[50%]'>IMAGE</div>
                    <button className=' bg-[#e0ff56] w-[50%] font-semibold rounded' >RELOAD CAPTCHA</button> 
                </div>
                <p className='text-gray-500 my-2'> * Attention:Captcha is case sensitive.</p>
            </div>

            <div className='space-x-6'>
              <button className='text-white bg-black w-36 py-2 rounded text-lg'>Login</button>
              <button className=' bg-[#e0ff56] w-[50%] font-semibold rounded py-2 text-lg'>Forgot Your Password?</button>
            </div>

            <div className='my-5'>
              <Link to={'/signup'} className='border border-gray-300 p-2 text-lg'>Create New Account?</Link>
            </div>

      </div>


      <div>
        
        
      </div>

    </div>
      
  )
}
