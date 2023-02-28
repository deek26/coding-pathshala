import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className='m-10'>
      <div className='m-20'>
        <Link to={'/home' } className='hover:underline text-gray-600' >Home</Link>
        <span> > </span>
        <span> Request For Specimen </span>
      </div>  
      <h1 className='text-4xl font-semibold text-center mt-16 my-7 text-[#1c3755] font-mono'>Request For Specimen</h1> 

    <div className='  flex  justify-around  my-10'>

          <div className='space-y-2 text-lg w-[40%]'>

              <p className='p-2 font-serif'>First Name :</p>
              <input type="text"  className='border-[2px] border-gray-300 p-2 w-full rounded'  />

              <p className='p-2 font-serif'>Email Id :</p>
              <input type="email" className='border-[2px] border-gray-300 p-2 w-full rounded'   />

              <p className='p-2 font-serif'>Address :</p>
              <input type="text"  className='border-[2px] border-gray-300 p-2 w-full rounded'  />

              <p className='p-2 font-serif'>Subject of Teaching :</p>
              <input type="text"  className='border-[2px] border-gray-300 p-2 w-full rounded'  />

              <p className='p-2 font-serif'>Institute name :</p>
              <input type="text"  className='border-[2px] border-gray-300 p-2 w-full rounded'  />

              <p className='p-2 font-serif'>Book name  recommending  presently:</p>
              <input type="text"  className='border-[2px] border-gray-300 p-2 w-full rounded'  />


            </div>

            <div className='  space-y-2 text-lg w-[40%]  '>
                        <p className='p-2 font-serif'>Last Name :</p>
                        <input type="text"  className='border-[2px] border-gray-300 p-2 w-full rounded'  />

                        <p className='p-2 font-serif'>Contact :</p>
                        <input type="tel"  className='border-[2px] border-gray-300 p-2 w-full rounded'  />
                         <p className='p-2 font-serif'>Pincode :</p>
                        <input type="tel"  className='border-[2px] border-gray-300 p-2 w-full rounded'  />
                        <p className='p-2 font-serif'>Number of Students 
                                Teaching Presently :</p>
                        <input type="text"  className='border-[2px] border-gray-300 p-2 w-full rounded'  />
                        <p className='p-2 font-serif'>Institute Address :</p>
                        <input type="text"  className='border-[2px] border-gray-300 p-2 w-full rounded'  />
                    </div>
        
        </div>

        <div className='m-20'>
          <p className='text-2xl font-mono font-semibold text-[#1c3755]'>Prodution Information</p>

          <div className='  flex  justify-around  my-10'>
            <div className='  space-y-2 text-lg w-[40%]  '>
              <p className='p-2 font-serif' > Name of Books :</p>
              <input type="text"   className='border-[2px] border-gray-300 p-2 w-full rounded' />
              <p className='p-2 font-serif'> Author Name :</p>
              <input type="text"   className='border-[2px] border-gray-300 p-2 w-full rounded' />
              
            </div>
            <div className='  space-y-2 text-lg w-[40%]  '>
              <p className='p-2 font-serif'> ISBN :</p>
              <input type="text"   className='border-[2px] border-gray-300 p-2 w-full rounded' />
              <p className='p-2 font-serif'> How did you get to know about this product :</p>
              <input type="text"   className='border-[2px] border-gray-300 p-2 w-full rounded' />
            </div>
          </div>
          <br />
          <div className='text-center'>
            <button className='py-2 px-7 bg-[#c8ca44] text-white font-serif font-semibold hover:shadow-md'>SUBMIT</button>
          </div>
        </div>

        
    </div>
  )
}
