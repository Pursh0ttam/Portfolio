import React, { useState } from 'react';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const [icon, setIcon] = useState(false);

    const sets=[
        {
        id:1,
        child:(
            <>
            LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href:'https://Linkedin.com',
        style:"rounded-tr-md"
         },

         {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Pursh0ttam'
         },

        {
            id:3,
            child:(
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href:'mailto:kumarpurshottam474@gmail.com',
            style:'rounded-tr-md'
         },

         {
            id:4,
            child:(
                <>
                     Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href:"/PurshottamKumar.pdf",
            style:"rounded-tr-md",
            download:true,
         },
];
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {sets.map((value,index)=>(
            <li 
            key={index} 
             className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  duration-300 hover:rounded-md bg-gray-500' + " " + value.style}> 
                <a
                 href={value.href}
                 className='flex justify-between items-center w-full text-white'
                 download={value.download}
                 target='_blank'
                 rel="noreferrer"
            >
              {value.child}
                </a>
            </li>
            ))}
        </ul>
        
        </div>
  );
};

export default SocialLinks;
