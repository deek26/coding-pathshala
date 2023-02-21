import React from 'react'

export default function AboutUs() {
  return (
    <div>
        <h1 className='text-6xl font-semibold text-[#457b9d] text-center my-8'>About Us</h1>
        
        <img src='about-us.png' className='p-10 m-auto'/>

        <p className='text-center text-xl text-gray-600'>Coding Pathshala is India's leading publisher and distributor of print and digital learning material with strengths in school <br /> books, competitive exam books, e-books and online test series. Coding Pathshala has been awarded the <span className='text-[#1b5980]  font-bold'>"Best Exam Prep</span>  <br /> <span className='text-[#1b5980] font-bold'>Company of 2022"</span> by BW Business World and 2nd among India's Top Academic Publishers by the Minister of State for<br /> Education Sh. Rajkumar Ranjan Singh, during The People's Choice Publisher Award by Front List and The Federation <br /> of Indian Publishers with Nielsen in March 2022.</p>

        <p className='text-center my-6 text-xl text-gray-600 '>With a history of 20+ years and a catalogue of 800+ books, Coding Pathshala provides online learning options, varying <br /> from eBooks, online tests, online courses, and mentorship, while also being a leading provider of K–12 education content <br /> and material for competitive exams.</p>


        <div className='relative'>
            <img src='aboutus2.png' />
            <p className='absolute  left-[150px] bottom-[200px] w-[50%] text-md'>Coding Pathshala caters to not just the student's academic abilities but also prepares them for the bigger challenges of life. The company has always had the upper hand in its approach to executing innovative ideas in revolutionizing education across the country. The vision is to provide the best study material with greater accuracy and resourcefulness for the aspirants to prepare most effectively across various verticals like competitive exams, govt. job vacancy exams, school learning, and e-learning.</p>

        </div>
        
    </div>
  )
}
