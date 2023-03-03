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

      <div className='flex w-[75%] m-auto border-2 border-gray-300 my-10 border-r-0'>
        <div className='border-2 border-gray-400 w-[25%] space-y-7 pb-[20px] '>
                    <div className=' bg-blue-400  m-4'>
                        <img src="worksheet.jpg" alt="" className='w-[150px] h-[200px] py-2 px-3 m-auto' />
                    </div>
                    <p className='text-center font-semibold '>Multiple Intelligence Worksheets   <br /> for PRE SCHOOL 2 <br /> [Nursery/Ages 4-5] 
                     <br /> 2nd Edition </p>
                     <button className='text-lg font-bold text-center bg-yellow-300 p-4 ml-12 rounded-md '>ADD TO CART</button><br /> 
                     <button className='text-lg font-bold text-center p-4 ml-12 rounded-md border border-gray-300'>QUICK VIEW</button>
        </div>

        <div className='border-2 border-gray-400 w-[25%] space-y-7 pb-[20px] '>
                    <div className=' bg-blue-400  m-4'>
                        <img src="worksheet.jpg" alt="" className='w-[150px] h-[200px] py-2 px-3 m-auto' />
                    </div>
                    <p className='text-center font-semibold '>Multiple Intelligence Worksheets   <br /> for PRE SCHOOL 2 <br /> [Nursery/Ages 4-5] 
                     <br /> 2nd Edition </p>
                     <button className='text-lg font-bold text-center bg-yellow-300 p-4 ml-12 rounded-md '>ADD TO CART</button><br /> 
                     <button className='text-lg font-bold text-center p-4 ml-12 rounded-md border border-gray-300'>QUICK VIEW</button>
        </div>

        <div className='border-2 border-gray-400 w-[25%] space-y-7 pb-[20px] '>
                    <div className=' bg-blue-400  m-4'>
                        <img src="worksheet.jpg" alt="" className='w-[150px] h-[200px] py-2 px-3 m-auto' />
                    </div>
                    <p className='text-center font-semibold '>Multiple Intelligence Worksheets   <br /> for PRE SCHOOL 2 <br /> [Nursery/Ages 4-5] 
                     <br /> 2nd Edition </p>
                     <button className='text-lg font-bold text-center bg-yellow-300 p-4 ml-12 rounded-md '>ADD TO CART</button><br /> 
                     <button className='text-lg font-bold text-center p-4 ml-12 rounded-md border border-gray-300'>QUICK VIEW</button>
          </div>
      </div>

        

    </div>
  )
}
