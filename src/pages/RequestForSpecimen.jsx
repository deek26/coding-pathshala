import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div >
      <div className='m-20'>
        <Link to={'/home' } className='hover:underline text-gray-600' >Home</Link>
        <span> > </span>
        <span> Request For Specimen </span>
      </div>  
      <h1 className='text-4xl font-semibold text-center mt-16 my-7 text-[#1c3755]'>Request For Specimen</h1> 

      <div className='flex'>
            <div>

                        

            <div className='text-lg text-gray-500 px-40'>
                <p>First Name:</p>
                <input type='text' className='border-gray-100 border-2  py-3 my-2 w-[40%]'/>

                <p>Email Id:</p>
                <input type='email' className='border-gray-100 border-2  py-3 my-2 w-[40%]'/>

                <p>Address:</p>
                <input type='text' className='border-gray-100 border-2  py-3 my-2 w-[40%]'/>

                <p>Subject Of Teaching:</p>
                <input type='text' className='border-gray-100 border-2  py-3 my-2 w-[40%]'/>

                <p>Institute Name:</p>
                <input type='text' className='border-gray-100 border-2 py-3 my-2 w-[40%]'/>

                <p>Book name recommending presently:</p>
                <input type='text' className='border-gray-100 border-2 py-3 my-2 w-[40%]'/>

                <h1 className='text-3xl text-[#1c3755] my-7'>Product Information</h1>

                <p>Names of books:</p>
                <input type='text' className='border-gray-100 border-2 py-3 my-2 w-[40%]'/>

                <p>Author Name:</p>
                <input type='text' className='border-gray-100 border-2 py-3 my-2 w-[40%]'/>
                <br />
                <button className=' bg-[#e1f148] w-[12%] font-semibold rounded p-3 my-10 text-[#17552c]' >Submit</button>

            </div>



            </div>
                
            
            <div>
                    <p>Last Name:</p>
                        <input type='text' className='border-gray-100 border-2 py-3 my-2 w-[40%]'/>

                        <p>Contact:</p>
                        <input type='number' className='border-gray-100 border-2 py-3 my-2 w-[40%]'/>

                        <p>Pin Code:</p>
                        <input type='number' className='border-gray-100 border-2 py-3 my-2 w-[40%]'/>

                        <p>Number of Students Teaching Presently:</p>
                        <input type='text' className='border-gray-100 border-2 py-3 my-2 w-[40%]'/>

                        <p>Institute Address:</p>
                        <input type='text' className='border-gray-100 border-2 py-3 my-2 w-[40%]'/>  

            </div>
        
        
        </div>   

        
    </div>
  )
}
