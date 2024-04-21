import React from 'react'

const About = () => {
  return (
    <div
      id='about'
      className='relative isolate bg-gray-900 py-24 sm:py-32 rounded-xl mt-3'
    >
      <div
        className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
        aria-hidden='true'
      ></div>

      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            about
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            hi! my name is justin daludado and i'm a computer science student.
            i'm in my 3rd year of my honours bachelor of computer science degree
            at carleton university with a focus in cybersecurity. this site is a work in progress!
          </p>
        </div>
        <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
          <h3 className='text-3xl font-bold'>technologies i've worked with:</h3>
          <div className='flex space-x-4'></div>
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
            <a href='#projects'>
              check out some of my projects <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
