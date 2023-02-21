import React from 'react'
import logo from './assests/svg/logo.png'
import { Link } from 'react-router-dom'
import {FaFacebookF ,FaInstagram,FaYoutubeSquare,FaPinterest} from 'react-icons/fa'
import {GrLinkedinOption} from 'react-icons/gr'

export default function Footer() {
  return (
    <div className='flex space-between justify-around py-24 bg-[#0b090a] text-white'>
        <div>
            <img src={logo} alt='logo' className='h-[150px] w-[200px] cursor-pointer ' />
        </div>

        <div>
            <h1 className='text-2xl mb-4'>Support</h1>
            <div className='text-m text-gray-500 space-y-4'>
                <p><Link to='/aboutus'>About Us</Link></p>
                <p><Link to='/exam-updates'>Exam Updates</Link></p>
                <p><Link to='/request-for-specimen'>Request for Specimen</Link></p>
                <p><Link to='/track-your-orders'>Track Your Orders</Link></p>
                <p><Link to='/connect-us'>Connect Us</Link></p>
                <p><Link to='/team'>Team</Link></p>
                <p><Link to='/career'>Career</Link></p>
            </div>      
        </div>


        <div>
        <h1 className='text-2xl mb-4'>My Account</h1>
            <div className='text-m text-gray-500 space-y-4'>
                <p><Link to='/sign-in'>Sign In</Link></p>
                <p><Link to='/view-cart'>View Cart</Link></p>
                <p><Link to='/contactus'>Contact </Link></p>
                <p><Link to='/faqs'>FAQs</Link></p>
                <p><Link to='/catalogue'>Catalouge</Link></p>
            </div> 
        </div>


        <div>
        <h1 className='text-2xl mb-4'>Information</h1>
            <div className='text-m text-gray-500 space-y-4'>
                <p><Link to='/privacy-policy'>Privacy Policy</Link></p>
                <p><Link to='/shipping-returns-cancellations'>Shipping, Returns & Cancellations</Link></p>
            </div> 
        </div>


        <div className='space-y-10'>
                <div>
                    <h1 className='text-[#55a4b6]  text-2xl font-semibold mb-4'>Coporate Office :- </h1>
                    <p>Shop No. 14, 1st Floor, Block-14, <br />
                    Shoe Market, Sanjay Place, Agra</p>
                </div>
                
                <div>
                    <h1 className='text-[#55a4b6] text-2xl font-semibold mb-4'>Registered Office :- </h1>
                    <p>Shop No. 14, 1st Floor, Block-14, <br />
                    Shoe Market, Sanjay Place, Agra</p>
                </div>
                

                <div className='flex space-x-4 cursor-pointer text-2xl'>
                    <FaFacebookF/>
                    <GrLinkedinOption/>
                    <FaInstagram/>
                    <FaYoutubeSquare/>
                    <FaPinterest/>

                </div>
        </div>








    </div>
  )
}
