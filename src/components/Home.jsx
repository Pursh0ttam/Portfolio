import React from 'react'
import heroImage from '../assets/heroImage.png'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-scroll';

const Home = () => {
  return (
  <>
<div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>

   <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>  
    <div  className='flex flex-col justify-center h-full'>
      <h6 className='text-4xl sm:text-2xl font-bold text-yellow-dark'>Hello👋</h6>
        <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm Purshottam,</h2>
        <h3 className='text-4xl sm:text-7xl font-bold text-white' >a website Developer</h3>
        <p className='text-gray-500 py-4 max-w-md'>
            I have 2 years of experience in building and designing websites.
            currently i love to work on web application using technologies like 
            React,Tailwind, HTML,CSS and JavaScript.
        </p>

        <div className='direction-flex'> {/**from her these will take to porfolio link */}

      <Link to='portfolio' smooth duration={500} className= 'group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer'>
         portfolio
            <span className='group-hover:rotate-90 duration-300'>  
        <IoIosArrowForward size={24} className='ml-1'/>
        </span>
      </Link>
        

        <div>
          <a href="/PurshottamKumar.pdf" download="" >
          <button className='group text-white w-fit px-6 pr-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer'>Resume
    
          <svg className="w-9 h-6 px-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
      </svg>
          </button>
        </a>
        </div>

        </div>


    </div>

    <div>
       <img src={heroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' /> 
    </div>
   </div>
</div>
  </>
  );
};

export default Home;
