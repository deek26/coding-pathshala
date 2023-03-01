import React from 'react'

export default function Home() {
  return (
    <>
    <div className='mb-4 flex justify-center space-x-11 mt-20'>
            <div className='mb-40'>
                <div className='h-32 '>
                    <img src='./download.jpg' className='h-32 w-32 m-auto' />
                    <h2 className='font-bold text-center text-red-600 text-lg'>TRUSTWORTHY</h2>
                    <p>Commitment Of Quality Books With <br /> Accurate Content From India's Best
                   Educators</p>
                </div>      
             </div>

                <div>
                  <div className='h-32 '>
                  <img src='./learning.png' className='h-32 w-32 m-auto'/>
                  <h2 className='font-bold text-center text-red-600 text-lg'>EXHAUSTED</h2>
                    <p>360 Degree Solution To All Learning Needs <br />
                    (Textbooks, Guides Samples, Solved Papers)</p>
                </div>
               

               </div>

              
              <div>
                  <div className='h-32 '>
                    <img src='./compiled.png' className='h-32 w-32 m-auto'/>
                    <h2 className='font-bold text-center text-red-600 text-lg'>INNOVATIVE</h2>
                    <p>New Prep Strategies And Presentation <br />Styles To Make Exam Preparation Easy</p>
                  </div>
                 
              </div>

              <div>
                  <div className='h-32 '>
                    <img src='./study.png' className='h-[129px] w-[129px] m-auto' />
                    <h2 className='font-bold text-center text-red-600 text-lg'>RELEVANT</h2>
                    <p>Thoroughly Revised And Update Content To <br /> Match Exam Pattern And Trend </p>
                  </div>
            
              </div>   

          </div>

            <div  className='flex justify-around'>
                <img src="jee.png" alt=""   className='w-[40%]'/>
                <img src="neet.png" alt=""  className='w-[40%]' />
               
                
            </div>
            <div className='flex justify-around'>
            <img src="upsc2.png" alt=""   className='w-[40%]'/>
                <img src="cuet.png" alt=""  className='w-[40%]' />
            </div>

            <button className='font-serif font-thin bg-[#e6ce36] p-2 ml-[50%] shadow-gray-300 shadow-md my-8'>VIEW MORE</button>

            <h1 className='my-10 text-2xl text-[#79442b] font-semibold font-serif ml-10'>Coding Pathshala's Other Products</h1>
            <div className='flex justify-around my-10'>
              <img src='video.jpg' />
              <img src='online.jpg' />
              <img src='download (2).jpg' />
            </div>

    </>
  )
}
