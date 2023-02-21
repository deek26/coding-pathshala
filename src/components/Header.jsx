import React from 'react'
import {ImWhatsapp} from 'react-icons/im'
import logo from './assests/svg/logo.png'
import {GoSearch} from 'react-icons/go'
import {FiUsers} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'
import {BsHandbag} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


export default function Header() {



  const navigate =useNavigate()



      function dropdown(){
        <div>
          hello
        </div>

        
      }


  return (
<>

  <div>
      <header>
          <div className='flex justify-end items-center bg-black h-[40px]  '>
            <div >
              <ul className='flex space-x-4 mr-[130px]'>
                <li className={`text-white font-semibold text-[15px] cursor-pointer`}
                onClick={()=>navigate('/MyAccount')}
                >My Account</li>
                <li className={`bg-white w-[1px] h-3 mt-[6px]`}></li>
                <li className={`text-white font-semibold text-[15px] cursor-pointer`}
                onClick={()=>navigate('/FAQs')}
                >FAQs</li>
                <li className={`bg-white w-[1px] h-3 mt-[6px]`}></li>
                <li className={`text-white font-semibold text-[15px]  cursor-pointer flex justify-center items-center `}
                onClick={()=>navigate('/ContactUs')}
                >Contact Us
                 <ImWhatsapp className='ml-3 h-5 w-5' 
                   onClick={()=>navigate('/Whatsapp')}
                 />
                </li>    
              </ul>
             </div>

          </div>


          <div className='flex mt-4 '>
             <div>
                <img src={logo} alt='logo' className='h-[100px] w-[200px] cursor-pointer '
                onClick={()=>navigate('/home')}
                />
               </div>

               <div className='flex items-center space-x-5'>
                  <div className='flex items-center relative'>
                        <input type='search' 
                        placeholder='Search entire store here....'
                        className='border-[2px] border-black w-[500px] h-[55px] rounded ml-48 pl-4'/>
                        <GoSearch className=' h-[55px] w-[60px] bg-blue-300 p-[13px] rounded absolute right-0' />
                  </div>

                  <div className='flex items-center'> 
                      <FiUsers className='h-[30px] w-[40px]' />
                    
                      <div className='text-md cursor-pointer'>
                        <p><Link to='/signin'>Sign In</Link></p>
                        <p><Link to='/signup'>Create New Account</Link></p>
                      </div>
                </div>

                  <div className='flex items-center'> 
                     <FiHeart className='h-[30px] w-[40px] cursor-pointer' />
                    
                          <div className='text-md cursor-pointer'>
                            <p>Favorite</p>
                            <p>My Wish List</p>
                          </div>
                      </div>
                          <div className='flex items-center'> 
                            <BsHandbag className='h-[30px] w-[40px] cursor-pointer' />
                    
                          <div className='text-md cursor-pointer'>
                            <p>My Cart</p>
                            <p>₹0.00</p>
                          </div>

                      </div>        
                </div>  

          </div>


          <div className='flex text-white space-x-[30px] items-center bg-black h-[60px] font-semibold cursor-pointer'>

                    <div className='flex space-x-8 ml-[100px] border-[#6b705c] border-r-[1px] ' onClick={()=>dropdown}>
                        <p className='text-white'>
                          ALL CATEGORIES
                        </p>

                        <div className='flex flex-col space-y-1 justify-center pr-[100px]'>
                          <div className=' w-7 h-[3px] bg-white'></div>
                          <div className=' w-7 h-[4px] bg-white'></div>
                          <div className=' w-7 h-[3px] bg-white'></div>
                        </div>


                    </div>
                    <div className='flex space-x-2 items-center cursor-pointer'>
                      <p>Our Products</p>
                      <IoIosArrowDown/>
                    </div>
                    <div className='flex space-x-2 items-center cursor-pointer'>
                      <p>Grow With Us</p>
                      <IoIosArrowDown/>
                    </div>
                    <div className='cursor-pointer'>
                      <p>Coaching Institues</p>
                    </div>
                    <div className='cursor-pointer'>
                      <p>Media Coverage</p>
                    </div>
                    <div className='flex space-x-2 items-center cursor-pointer'>
                      <p>Free Content</p>
                      <IoIosArrowDown/>
                    </div>

          </div>

           
          
      </header>

      </div>


    </>
    
  )
}
