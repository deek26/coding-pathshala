import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div>
        <div className='ml-20 mt-14 text-md'>
            <Link to={'/home' } className='hover:underline text-gray-600' >Home</Link>
            <span> > </span>
            <span> team </span>
        </div>  
            <h1 className='text-4xl font-semibold text-center mt-10 my-7 text-[#1c3755]'>CODING PATHSHALA</h1> 

            <img src='team.png' className='m-auto'/>

            <p className='text-center text-xl mt-16 text-gray-500'>Disha Publication over the years has garnered a team that comprises of renowned Teachers, Trainers, Study Coaches, <br /> Researchers, Content Developers, Curriculum Developers, Subject Matter Experts, Editors, Proof Readers (Quality ),<br /> Designers, Digital Experts, Sales and Marketing Professionals. They play a significant role in developing the study material <br /> in terms of the students’ specific requirements for the exam and making it accessible for students via all possible <br /> channels.</p>

            <div className='flex space-x-80 m-auto w-[50%] my-96'>
                <img src='anurag.jpg' className='h-[270px] w-[200px] rounded-[10%]'/>
                <img src='deek.jpg' className='h-[270px] w-[200px] rounded-[10%]'/>
            </div>
            
    </div>
  )
}
