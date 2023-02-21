import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'

export default function Contactus() {
  return (
    <div>
      <div>
        <h1 className='text-5xl text-center my-10'>Contact Us</h1>
         <p className='text-md text-gray-500 text-center my-4'>Right connections are the main source of sustenance for a successful business.</p>
         <p className='text-md text-gray-500 text-center my-3'>Dear visitor we value your input and feedback and we look forward to a long lasting relationship </p>
      </div>

      <div>
        <img src='banner.jpg' />
      </div>     

      <div>
        <h1 className='text-3xl text-center mt-14 font-semibold'>We Are Coding Pathshala Contact Us For Any Question</h1>
        <p className='text-md text-center my-4 text-gray-500'>For business inquiry and general information call the number below:</p>
        <p className='text-lg text-center my-4 text-blue-700 font-bold '>05624-368606</p>
      </div>

      <div className='flex space-x-4 justify-center my-16 '>
        <div className='border-2 border-gray-300 py-16 px-4 space-y-4 hover:shadow-lg'>
          <img src='books.jpg' className='h-20 w-20 m-auto'/>
          <p className='text-center text-lg font-semibold border-gray-200 border-b-2 pb-3'>Bulk Books Ordering</p>
          <p>In case, you are interested in Bulk Books </p>
          <p>Ordering :</p>
          <p className='text-blue-700'>
            Email :- deek26@gmail.com
          </p>
        </div>

        <div className='border-2 border-gray-300 py-16 px-4 space-y-4 hover:shadow-lg'>
          <img src='study (1).png' className='h-20 w-23 m-auto' />
          <p className='text-center text-lg font-semibold border-gray-200 border-b-2 pb-3'>Study Material</p>
          <p>If you require study material for coaching</p>
          <p>Institutes</p>
          <p className='text-blue-700'>Email:- deek26@gmail.com</p>
        </div>

        <div className='border-2 border-gray-300 py-16 px-4 space-y-4 hover:shadow-lg'>
          <img src='authors.png' className='h-20 w-20 m-auto' />
          <p className='text-center text-lg font-semibold border-gray-200 border-b-2 pb-3'>Authors</p>
          <p>Talented authors can join us:</p>
          <p className='text-blue-700'>Email:- deek26@gmail.com</p>
        </div>

        <div className='border-2 border-gray-300 py-16 px-4 space-y-4 hover:shadow-lg'>
          <img src='work.png' className='h-20 w-20 m-auto'/>
          <p className='text-center text-lg font-semibold border-gray-200 border-b-2 pb-3'>Work with us</p>
          <p>Work with us you're your cv</p>
          <p className='text-blue-700'>Email:- deek26@gmail.com</p>
       </div>
      </div>
            <div className='flex justify-around m-10 '>
                    <div className='w-[40%]'>
                      <h1 className='text-3xl text-[#03071e]'>Frequently Asked Questions</h1>
                      <div className='flex justify-between border-b border-t my-4 py-5  border-gray-200  '>
                        <p>What is Coding Pathshala store Cancellation policy/How do I cancel my order?</p>
                        <MdKeyboardArrowDown />
                      </div>

                      <div className='flex justify-between border-b my-4 py-3 border-gray-200'>
                        <p>When and how will I receive my refund?</p>
                        <MdKeyboardArrowDown />      
                      </div>

                      <div className='flex justify-between border-b my-4 py-3 border-gray-200'>
                        <p>What is return/exchange policy on my order?</p>
                        <MdKeyboardArrowDown />          
                      </div>

                      <div className='flex justify-between border-b  my-4 py-3 border-gray-200'>
                        <p>What is the return policy on Cash on Delivery (COD) order?</p> 
                        <MdKeyboardArrowDown />          
                      </div>

                      <div className='flex justify-between border-b  my-4 py-3 border-gray-200'>
                        <p>What is the Processing time on my order?</p>
                        <MdKeyboardArrowDown />          
                      </div>

                      <div className='flex justify-between border-b  my-4 py-3 border-gray-200'>    
                        <p>What is the estimated delivery time on my order?</p>
                        <MdKeyboardArrowDown />          
                      </div>

                      <div className='flex justify-between border-b  my-4 py-3 border-gray-200'>    
                        <p>How can I track my order?</p>
                        <MdKeyboardArrowDown />          
                      </div>

                      <div className='flex justify-between border-b  my-4 py-3 border-gray-200'>    
                        <p>What are the different categories of books that are available on Coding Pathshala's Store?</p>
                        <MdKeyboardArrowDown />          
                      </div>

                      <div className='flex justify-between border-b  my-4 py-3 border-gray-200'>    
                        <p>Does Coding Pathshala offer video courses as well?</p>
                        <MdKeyboardArrowDown />          
                      </div>

                      <div className='flex justify-between border-b  my-4 py-3 border-gray-200'>
                        <p>Does Coding Pathshala offer discount on the books?</p>
                        <MdKeyboardArrowDown />          
                      </div>


                  </div>

                    <div className='border-2 border-gray-200 shadow-md p-2 space-y-6'>
                        <h1 className='font-semibold text-2xl text-[#03071e]'>Contact us for any questions</h1>
                      <div className='flex w-full space-x-6'>
                          <div>
                              <input placeholder='Your Name' type='text' className='border-gray-100 border-2 h-10 my-2'/>
                          </div>
                          <div>
                              <input placeholder='Your Email' type='email' className='border-gray-100 border-2 h-10 my-2'/>
                          </div>

                      </div>

                      <input type='tel' placeholder='Phone number' className='border-gray-100 w-full border-2 h-10 my-2' />

                    <textarea  rows='4' cols='30' placeholder="What's on your mind?" 
                    className='border-gray-100 w-full border-2  my-2' ></textarea>

                    <p>Please type the letters and numbers below <span className='text-red-700'>*</span></p>
                    <input type='text' className='border-gray-100 w-full border-2 h-10 my-2' />

                    <div className=' flex w-full h-10 my-2 '>
                        <div className='w-[50%]'>IMAGE</div>
                        <button className=' bg-[#b8c0ff] w-[50%] font-semibold rounded' >RELOAD CAPTCHA</button> 
                    </div>
                      <p className='text-gray-500 my-2'> * Attention:Captcha is case sensitive.</p>
                      
                    <button className=' bg-[#b8c0ff] w-[50%] font-semibold rounded p-1' >ASK A QUESTION</button> 
                    </div>
                      
                 </div>

                 
          </div>


    
  )
}
