import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className='bg-[#f2e9e4] py-20 px-12'>
        <div className='ml-20 text-md'>
            <Link to={'/home' } className='hover:underline text-gray-600' >Home</Link>
            <span> > </span>
            <span> Connect Us </span>
        </div>  
            <h1 className='text-4xl font-semibold text-center mt-10 my-7 text-[#1c3755]'>Connect Us</h1> 

            <p className='text-center text-2xl font-semibold text-[#8f5c3b] my-6'>Get Connected And Stay Connected</p>
            <p className='text-center text-lg'>Dear visitor your requirments/suggetions are important to us. <br />Please feel free to call us on below number and ask for the respective extentions</p>
            <p className='text-center text-2xl mt-5 text-[#8f5c3b] font-semibold'>05624305606</p>

            <div className='flex justify-around my-10 '>
                <div className=' border-[#1c3755] shadow-lg hover:shadow-[#c58b65] p-10 flex flex-col justify-center items-center space-y-5 text-lg  bg-[#ddbea9] text-[#1c3755] w-[30%]'>
                    <img src='BULK BOOKS ORDER-01.PNG' />
                    <p className='text-center font-bold text-xl'>BULK BOOKS ORDER <br /> <span className='text-lg'>Ext.no. 106</span></p>
                    <p> <span className='font-semibold'>Email id:</span> sales3@aiets.co.in</p>
                </div>

            <div className=' border-[#1c3755] shadow-lg hover:shadow-[#c58b65] p-10 flex flex-col justify-center items-center space-y-5 text-lg  bg-[#ddbea9] text-[#1c3755] w-[30%]'>
                <img src='Study Material for Coaching Institutes.png' />
                <p className='text-center font-bold text-xl'>STUDY MATERIAL FOR <br /> COACHING INSTITUES <br /><span className='text-lg'>Ext. no. 150</span> </p>
                <p><span className='font-semibold'>Email id:</span> teamlead2@aiets.co.in</p>
            </div>

            <div className=' border-[#1c3755] shadow-lg hover:shadow-[#c58b65] p-10 flex flex-col justify-center items-center space-y-5 text-lg  bg-[#ddbea9] text-[#1c3755] w-[30%]'>
                <img src='suggestions.png' />
                <p className='text-center font-bold text-xl'>SUGGESTIONS OR FEEDBACK OF OUR PRODUCTS <br /><span className='text-lg'>Ext. no. 146</span></p>
                <p><span className='font-semibold'>Email id:</span> feedback_disha@aiets.co.in</p>
            </div>
        </div>


        
        <div className='flex justify-around my-10'>
            <div className=' border-[#1c3755] shadow-lg hover:shadow-[#c58b65] p-10 flex flex-col justify-center items-center space-y-5 text-lg  bg-[#ddbea9] text-[#1c3755] w-[30%]'>
                <img src='BULK BOOKS ORDER-01.PNG' />
                    <p className='text-center font-bold text-xl'>BULK BOOKS ORDER <br /> <span className='text-lg'>Ext.no. 106</span></p>
                    <p ><span className='font-semibold'>Email id:</span>sales3@aiets.co.in</p>
            </div>

            <div className=' border-[#1c3755] shadow-lg hover:shadow-[#c58b65] p-10 flex flex-col justify-center items-center space-y-5 text-lg  bg-[#ddbea9] text-[#1c3755] w-[30%]'>
                <img src='Study Material for Coaching Institutes.png' />
                    <p className='text-center font-bold text-xl'>STUDY MATERIAL FOR <br /> COACHING INSTITUES <br /> <span className='text-lg'>Ext.no. 106</span></p>
                    <p><span className='font-semibold'>Email id:</span> teamlead2@aiets.co.in</p>
            </div>

            <div className=' border-[#1c3755] shadow-lg hover:shadow-[#c58b65] p-10 flex flex-col justify-center items-center space-y-5 text-lg  bg-[#ddbea9] text-[#1c3755] w-[30%]'>
                <img src='suggestions.png' />
                    <p className='text-center font-bold text-xl'>SUGGESTIONS OR FEEDBACK OF OUR PRODUCTS <br /><span className='text-lg'>Ext.no. 106</span></p>
                    <p><span className='font-semibold'>Email id:</span> feedback_disha@aiets.co.in</p>
                </div>
        </div>


        
        <div className='flex justify-around'>
            <div className=' border-[#1c3755] shadow-lg hover:shadow-[#c58b65] p-10 flex flex-col justify-center items-center space-y-5 text-lg  bg-[#ddbea9] text-[#1c3755] w-[30%]'>
                <img src='WORK with US.png' />
                    <p className='text-center font-bold text-xl'>WORK WITH US <br /><span className='text-lg'>Ext.no. 106</span></p>
                    <p><span className='font-semibold'>Email id:</span> hr@aiets.co.in</p>
            </div>

            <div className=' border-[#1c3755] shadow-lg hover:shadow-[#c58b65] p-10 flex flex-col justify-center items-center space-y-5 text-lg  bg-[#ddbea9] text-[#1c3755] w-[30%]'>
                <img src='Find out retailers near you.png' />
                    <p className='text-center font-bold text-xl'>FIND OUT RETAILERS NEAR YOU <br /> <span className='text-lg'>Ext.no. 106</span></p>
                    <p><span className='font-semibold'>Email id:</span> sales.support1@aiets.co.in</p>
            </div>

            <div className=' border-[#1c3755] shadow-lg hover:shadow-[#c58b65] p-10 flex flex-col justify-center items-center space-y-5 text-lg  bg-[#ddbea9] text-[#1c3755] w-[30%]'>
                <img src='Advertise with Us.png' />
                    <p className='text-center font-bold text-xl'>ADVERTISE WITH US <br /><span className='text-lg'>Ext.no. 106</span></p>
                    <p><span className='font-semibold'>Email id:</span> marketing2@aiets.co.in</p>
            </div>
        </div>

    </div>
  )
}
