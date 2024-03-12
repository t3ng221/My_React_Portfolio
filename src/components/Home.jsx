import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";
import PersonImage from '../assets/images/person.jpg';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify center h-full px-4 md:flex-row'>
        <div>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>I have experienced React Developer.</p>
        <div>
        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
            Portfolio
           <span className='group-hover:rotate-90 duration-300'>
           <IoMdArrowRoundForward size={25} className='ml-1'/>
           </span>
        </button>
        </div>
      </div>
    
    <div>
        <img src={PersonImage} alt="" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
    </div>
    </div>
    </div>
  )
}

export default Home
