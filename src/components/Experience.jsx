import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import graphql from "../assets/graphql.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"

const Experience = () => {
    const images=[
        {
            id:1,
            title:'HTML',
            src:html,
            style:'shadow-orange-500'
        },
        {
            id:2,
            title:'css',
            src:css,
            style:'shadow-blue-500'         
        },
        {
            id:3,
            title:'javascript',
            src:javascript,
            style:'shadow-yellow-500'  
        },
        {
            id:4,
            title:'React',
            src:reactImage,
            style:'shadow-blue-500'   
        },
        // {
        //     id:5,
        //     title:'Next JS',
        //     src:nextjs,
        //     style:'shadow-white'
        // },
        // {
        //     id:6,
        //     title:'Graphql',
        //     src:graphql,
        //     style:'shadow-pink-400'
        // },
        {
            id:7,
            title:'GitHub',
            src:github,
            style:'shadow-gray-400'
        },
        {
            id:8,
            title:'Tailwind',
            src:tailwind,
            style:'shadow-sky-400'
        },
    ]
  return (
    <div name="experience" className='  bg-gradient-to-b from-gray-800 to-black w-full 
    h-screen'>

      <div className='p-8  max-w-screen-lg  mx-auto flex flex-col justify-center
       w-full h-full  text-white'>

        <div>
            <p className=' pt-20 text-4xl font-bold inline border-b-4 border-gray-500 '>
                Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>
        </div>


     <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

         {images.map(({id,src,title,style})=>(
            <div
             key={id}
             className={`shadow-md py-2  rounded-lg  duration-500 hover:scale-105 ${style}`}>
               <img src={src} alt="Pic" className= "w-20 mx-auto"/>
               <p className='mt-4'>{title}</p>
            </div>
            ))}
        </div>

      </div>

    </div>
  )
}

export default Experience
