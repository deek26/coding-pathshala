import React from 'react'
import { Link } from 'react-router-dom'

export default function FAQs() {
  return (
    <>
      <div className='m-20'>
      <Link to={'/home' } className='hover:underline text-gray-600' >Home</Link>
      <span>></span>
      <span>FAQs</span>

      <div>
      <h1 className='text-4xl font-semibold text-center mt-16'>FAQs</h1>

    <div className='space-y-14 mt-12 mb-40'>
      <div className='w-[40%]'>
        <h1 className='font-semibold text-gray-700 text-3xl'>Orders</h1>
        <p className='border-b border-gray-200 py-10'>1. What Is Coding Pathshala's Cancellation Policy Or How Do I Cancel My Order?</p>
        <p className='border-b border-gray-200 py-10'>2. Is There A Cancellation Fee Charged?</p>
        <p className='border-b border-gray-200 py-10'>3. When And How Will I Receive My Refund?</p>
        <p className='border-b border-gray-200 py-10'>4. What Is The Return/Exchange Policy On My Order?</p>
        <p className='border-b border-gray-200 py-10'>5. What Is The Return Policy On Cash On Delivery (COD) Order?</p>
        <p className='border-b border-gray-200 py-10'>6. What Is The Processing Time On My Order?</p>
        <p className='border-b border-gray-200 py-10'>7. What Is The Estimated Delivery Time On My Order?</p>
        <p className='border-b border-gray-200 py-10'>8. How Can I Track My Order?</p>
        <p className=' py-10'>9. Does Coding Pathshala Accept International Orders?</p>
      </div>
      
      <div className='w-[40%]'>
        <h1 className='font-semibold text-gray-700 text-3xl'>Books</h1>
        <p className='border-b border-gray-200 py-10'>1. What Are The Different Categories Of Books That Are Available
        On Coding Pathshala's Store?</p>
        <p className='border-b border-gray-200 py-10'>2. What Are The Types Of Prep Books Or Study Material That
        Coding Pathshala Publishes?</p>
        <p className='border-b border-gray-200 py-10'>3. Who Is Coding Pathshala's Authors? / Who Write The Books 
        Published By Coding Pathshala?</p>
        <p className='border-b border-gray-200 py-10'>4. What Are Some Of The USP (Unique Selling Point)
         Of Coding Pathshala's Books?</p>
        <p className='border-b border-gray-200 py-10'>5. What Type Of People Will Benefit From Books Published By 
        Coding Pathshala?</p>
        <p className='border-b border-gray-200 py-10'>6. Are Coding Pathshala's Exam Prep Books Available In Hindi?</p>
        <p className='border-b border-gray-200 py-10'>7. Are The Prices Of Coding Pathshala's Books Reasonable?</p>
        <p className='border-b border-gray-200 py-10'>8. Does Coding Pathshala's Offer Discount On Their Books?</p>
        <p className='border-b border-gray-200 py-10'>9. Does Coding Pathshala's Offer Video Courses As Well?</p>
        <p className=' py-10'>10. What Is The Price Of Video Courses Offered By Coding Pathshala?</p>
      </div>
      
      <div className='w-[40%]'>
        <h1 className='font-semibold text-gray-700 text-3xl'>Company</h1>
        <p className='border-b border-gray-200 py-10'>1. What Is AIETS?</p>
        <p className='border-b border-gray-200 py-10'>2. What Is MPower And Its Connection To AIETS?</p>
        <p className='border-b border-gray-200 py-10'>3. Is Coding Pathshala Active On Social Media?</p>
        <p className=' py-10'>4. Is There An App Available For Coding Pathshala?</p>
      </div>


    </div>

   

    </div>

      </div>
    </>
      )
}
