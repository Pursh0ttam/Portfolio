import React from 'react'
import Foodish from '../assets/Portfolio/Foodish.png';
import Millionaire from '../assets/Portfolio/Millionaire.jpg';
import drumKit from '../assets/Portfolio/drumKit.png';
import todolist from '../assets/Portfolio/todolist.png';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactWeather from '../assets/Portfolio/reactWeather.jpg';
import Netflix from '../assets/portfolio/Netflix.png';
import currencyConvertor2 from '../assets/portfolio/currencyConvertor2.png';

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            logo:Millionaire,
            link:'https://millionaire-app-mu.vercel.app/'
        },
        {
            id:2,
            
            logo:Netflix,
            link:'https://netflix-two-amber.vercel.app/'
        },
        {
            id:3,
            logo:Foodish,
            link:'https://foodish.vercel.app/'
        },
        {
            id:4,
            logo:drumKit,
            link:'https://drum-kit-swart-nine.vercel.app/'
        },
        {
            id:5,
            logo:todolist,
            link:'https://todolist-theta-black.vercel.app/'
        },
        {
            id:6,
            logo:currencyConvertor2,
            link:'https://currency-convertor-rho-two.vercel.app/'
        },
        
    ]
  return (
   <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                portfolio
            </p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>

        
        <div className='grid ms:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
            {portfolios.map(({id,logo,link}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={logo} alt="pic"
                
                className="rounded-md duration-200 hover:scale-105"
                />
                {/* <a href={link}>Visit website</a> */}
                <div className='flex items-center justify-center'>
                    
                    <a href={link}>
                    <button className=' bg-gray-600 w-100% rounded-xl mb-5px background-color-blue px-6 py-3 m-4 duration-200 
                    hover:scale-105'>Visit site </button>
                    </a>

                    {/* <button className='w-1/2 px-6 py-3 m-4 duration-200
                     hover:scale-105'>code</button> */}
                   
                </div>
            </div>
            ))}

         </div>
    </div>
   </div>
  )
}

export default Portfolio
