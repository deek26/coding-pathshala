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

            <div className=' flex space-x-80 w-[80%] m-auto my-40'>
              <div className='w-[40%] space-y-9 '>
                <img src='anurag.jpg' className='h-[270px] w-[200px] rounded-[10%] m-auto'/>
                <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius porro vero esse? Dignissimos, facere numquam. Ad aliquam, autem amet harum animi ex eius natus impedit nemo doloribus voluptates vero sint illo nobis perspiciatis eos soluta nam magni veritatis nostrum consequuntur?</p>
              </div>

              <div className='w-[40%] space-y-9'>
                <img src='deek.jpg' className='h-[270px] w-[200px] rounded-[10%] m-auto'/>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium fuga cupiditate aut iste voluptatum cumque rem accusantium explicabo expedita. Consequatur iusto rem aspernatur? Nisi magnam laborum, laudantium minus aut eveniet, molestias est exercitationem aperiam, inventore suscipit debitis officia? Itaque?</p>
              </div>

            </div>
            
    </div>
  )
}
