import React from 'react';
import {FaBars, FaTimes}  from  'react-icons/fa';

const NavBar = () => {
    const links =  [
        {
            id:1,
            link:'About'
        },
        {
            id:2,
            link:'Home'
        },
    
        {
            id:3,
            link:'Portfolio'
        },

        {
            id:4,
            link:'Experience'
        },

        {
            id:5,
            link:'Contact'
        },
        ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
    <div><h1 className='text-5xl font-sign ml-2'>Sazedur</h1></div>
    <ul className='flex'>

       {links.map(({id,link})=>(
         <li 
         key={(id)}
         className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-300'> {link}</li> 
        
       ))}
        
    </ul>
    </div>

  )
}

export default NavBar
