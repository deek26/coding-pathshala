import React from 'react'
import {ImWhatsapp} from 'react-icons/im'
import logo from './assests/svg/logo.png'
import {GoSearch} from 'react-icons/go'
import {FiUsers} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'
import {BsHandbag} from 'react-icons/bs'

export default function Header() {
  return (


    <>

<div>
      <header >
          <div className='flex justify-end items-center bg-black h-[50px]  '>
            <div >
              <ul className='flex space-x-4 mr-[130px] cursor-pointer'>
                <li className='text-white font-semibold '>My Account</li>
                <li className='bg-white w-[2px]'></li>
                <li className='text-white font-semibold '>FAQs</li>
                <li className='bg-white w-[2px]'></li>
                <li className='text-white font-semibold flex justify-center items-center '>Contact Us
                 <ImWhatsapp className='ml-3 h-7 w-7'/>
                </li>    
              </ul>
             </div>

          </div>




          <div className='flex '>


                <div className='h-[100px] w-[200px] '>
                  <img src={logo} alt='logo' />
                </div>


                <div className='flex items-center'>

                      <div className='flex items-center'>
                        <input type='search' 
                        placeholder='Search entire store here....'
                        className='border-[2px] border-black w-[500px] h-[55px] rounded ml-48 pl-4'/>
                        <GoSearch className=' h-[55px] w-[60px] bg-blue-300 p-[13px] rounded' />
                      </div>

                      <div className='flex items-center'> 
                        <FiUsers className='h-[30px] w-[40px]' />
                    
                          <div className='text-md'>
                            <p>Sign In</p>
                            <p>Create an Account</p>
                          </div>
                      
                        
                      </div>

                      <div className='flex items-center'> 
                        <FiHeart className='h-[30px] w-[40px]' />
                    
                          <div className='text-md'>
                            <p>Favorite</p>
                            <p>My Wish List</p>
                          </div>
                      </div>
                          <div className='flex items-center'> 
                            <BsHandbag className='h-[30px] w-[40px]' />
                    
                          <div className='text-md'>
                            <p>My Cart</p>
                            <p>₹0.00</p>
                          </div>

                      </div>

                        
                        
                </div>

               
          </div>
           
      </header>

      </div>


    </>
    
  )
}
