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

    
    </>
  )
}
