import React from 'react'

const About = () => {
  return (
    <div 
    name="about" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black
     text-white'>
      <div className='mx-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline borderd-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
        Over the years, I've honed my skills in front-end development,
         ensuring that websites I create are not only visually appealing but also functional and efficient. 
         I have experience working on a wide range of projects, from simple personal websites to complex e-commerce platforms and web-based applications.
        </p>
        <br />
        <p  className='text-xl'>I stay up-to-date with the latest web development trends and technologies
         to deliver cutting-edge solutions that meet the needs of both clients and users. Problem-solving and attention to detail are at the core of my work,
          and I'm dedicated to providing responsive, cross-browser compatible, and accessible websites.
         In this ever-evolving field, I'm excited to continue learning and adapting to new challenges in web development.</p>
      </div>
    </div>
  )
}

export default About
