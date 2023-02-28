import React from 'react'
import { Link } from 'react-router-dom'

export default function career() {
  return (
    <div>
        <div className='ml-20 mt-14 text-md'>
            <Link to={'/home' } className='hover:underline text-gray-600' >Home</Link>
            <span> &#62; </span>
            <span> career </span>
        </div>  
        <div>
            <img src="career.png" alt="" className='m-auto' />
        </div>

        <p className='text-center font-serif font-semibold text-4xl mb-10 mt-20 text-[#9e2a2a]'>WE ARE HIRING!!</p>
        <p className='text-center text-gray-400 text-xl font-serif'>Coding Pathshala is offering you a chance to work with us! Coding Pathshala has been awarded as 2nd among Top Indian <br /> Academic Publisher. It offers a positive work environment, with learning opportunities that are perfect to expand your <br /> horizon and to challenge your comfort zone. Coding Pathshala offers you the much needed growth.</p>

        <p className='text-center mt-9 text-xl text-gray-400 font-serif'>Coding Pathshala is an ever-growing family and has various departments that you can have a look at <br /> and find what might be the best fit for you!</p>

        <p className='text-center mt-9 text-xl text-gray-400 font-serif'>The open positions are updated weekly.</p>

        <hr className='w-[30%] m-auto mt-10'/>

        <p className='my-10 font-mono text-center text-3xl text-[#8f882e]'>Form For Job Application </p>

        <hr className='w-[30%] m-auto mb-10'/>

    <div className='flex justify-center space-x-9 bg-purple-50'>

        <div className='my-10 space-y-5 w-[45%]'>
            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>First Name</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Email Id</p>
            <input type='email' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Mobile No.</p>
            <input type='tel' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Skill</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

             <p className='font-semibold text-gray-600'>Attach Your CV (.doc,docx,.pdf,.odt)</p>

             <input type='file' />

             <br />

             <button className='p-2 border-2 border-gray-200 font-serif hover:shadow-md bg-[#d8cb52] rounded w-[15%] ml-[100%]'>SEND</button>   

        </div>


        <div className='my-10 space-y-5 w-[45%]'>
            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Qualification</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Experience</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Area Of Interest</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Applying For Position</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>
        </div>

    </div>

    <h1 className='text-center font-serif font-semibold text-4xl mb-16 mt-48 text-[#9e2a2a]'>Are You The Freelancer <br />We Have Been Looking For ? </h1>

    <p className='text-center mt-9 text-xl text-gray-400 font-serif'>Coding Pathshala is offering a chance to be a part of its ever expanding family! If you are passionate about content creation, <br /> but don’t want to sit inside a cubicle for 9 hours a day, we have come up with a perfect opportunity for you. <br />Work with us, on a freelance basis, from the comfort of your own home or surroundings.</p>

    <p className='text-center mt-9 text-xl text-gray-400 font-serif'>We offer a variety of Freelance work to choose from. Be it being an author or an Educator, you can be NEXT of either of <br /> the two! Even if you are a House Wife and possess requisite skills and a flair to write you can work with us.</p>

    <p className='text-center mt-9 text-xl text-gray-400 font-serif'>The procedure to apply for Freelance opportunities is simple and straightforward. <br /> We are providing a freelance opportunity in the following segments:-</p>

    <p className='text-center mt-9 text-xl text-gray-400 font-serif'>Editorial – Content Development, Editing & Copy Editing – Text/ Video – UPSC, JEE, NEET, K-12 Segment, School Entrance <br /> Exams, General Competitive Exams, College Entrance Exams & Govt. Vacancies.</p>

    <p className='text-center mt-9 text-xl text-gray-400 font-serif'>Digital – Blog Writers/ Content Writers</p>

    <p className='text-center mt-9 text-xl text-gray-400 font-serif'>Click on the link below and fill in the form with the essential details, if you believe you are the right fit.</p>

    <hr className='w-[30%] m-auto mt-10'/>

        <p className='my-10 font-mono text-center text-3xl text-[#8f882e]'>Form For 'Becoming A Freelancer' </p>

        <hr className='w-[30%] m-auto mb-10'/>


    <div className='flex justify-center space-x-9 bg-purple-50 mb-14'>
        <div className='my-10 space-y-5 w-[45%]'>
            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>First Name</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Email Id</p>
            <input type='email' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Mobile No.</p>
            <input type='tel' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Skill Area</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>
            
            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Job Post</p>
             <select className='border-2 border-gray-200 shadow-md p-3 rounded w-full text-gray-400 font-semibold' >
                <option value="developer">Developer</option>
                <option value="marketing">Marketing</option>
                <option value="tester">Tester</option>
             </select>

             <button className='p-2 border-2 border-gray-200 font-serif hover:shadow-md bg-[#d8cb52] rounded w-[15%] ml-[100%]'>SEND</button>   
        </div>

        <div className='my-10 space-y-5 w-[45%]'>
            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Qualification</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Experience</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Subject Of Interest</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>

            <p className='font-mono font-bold text-lg text-[#8b2c4d]'>Description</p>
            <input type='text' className='border-2 border-gray-200 shadow-md p-3 rounded w-full '/>
        </div>

    </div>

        <h1 className='text-center text-[#9e2a2a] font-serif  text-5xl mt-40'>INTERNS</h1>

        <p className='text-center text-gray-600 text-xl font-mono my-8 font-semibold'>Departments – Editorial, HR, Digital, Accounts, Sales & Marketing</p>

        <p className='text-center mt-9 text-xl text-gray-400 font-serif'>We are looking for dynamic, energetic interns who are eager to learn and work in different functions to kick-start their <br /> professional career. They should be serious and would be required to work diligently for respective number of hours on a daily basis. <br /> They will be working closely with our team to conduct research, capture data and attend meetings and might be asked <br /> to take minutes. The Internships vary for a period of 1 to 3 months. If you prove yourself to be worthy with requisite and <br /> essential skill sets and an eager mind to learn, you might get lucky to receive a full time working opportunity with us.</p>

        <p className='text-center mt-9 text-xl text-gray-400 font-serif'>To be successful as an Intern, you should be willing to help with any tasks assigned by a supervisor. You will be involved in <br /> upcoming projects as well as assisting with current campaigns. The intern must be willing to fulfill tasks set out by <br /> supervisors from several departments and perform research at a supervisor's request.</p>

        <hr className='w-[30%] m-auto mt-20'/>

        <p className='text-center mt-9 text-xl font-semibold font-mono text-[#9e2a2a]'>Intern Requirements:</p>

        <hr className='w-[30%] m-auto mt-10'/>

        <div className='w-[20%] m-auto space-y-4 my-6 border-2 shadow-md border-gray-100 mt-11'>
            <p className=' text-lg font-mono'> • A final year student or recent graduate.</p>
            <p className=' text-lg  font-mono'> • Eager to learn and work with various departments in the company.</p>
            <p className=' text-lg  font-mono'> • Excellent verbal and written communication skills.</p>
            <p className=' text-lg font-mono'> • Proficiency in Microsoft Office.</p>
            <p className=' text-lg font-mono'> • Ability to multitask.</p>
            <p className=' text-lg font-mono'> • Cope well under pressure.</p>

        </div>

        
        

    </div>
  )
}
