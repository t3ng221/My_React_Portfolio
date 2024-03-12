import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
      <p className='text-xl mt-20'>
      I am currently working as a Junior Data Analyst in Ecomclips. Here I have to organize business data for Amazon sellers like inventory reporting, PPC reporting, payments reporting, and business sales reporting, and make decisions depending on the data. I had to provide simple and understandable data from raw files of business so that clients could easily apply strategy depending on the data.
      </p>
      <br />
      <p className='text-xl'>
      I learned to make reports where the business owner will have a proper understanding of the business growth. I also had to do Amazon market research to have accurate knowledge of the business competitors and how our clients can compete with them in the market. I had to also conduct meetings with clients regarding different data scenarios and my findings.
      </p>
      </div>
    </div>
  )
}

export default About
