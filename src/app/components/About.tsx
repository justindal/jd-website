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
        <div className='lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            about
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Hi! My name is Justin Daludado and I'm a computer science student at
            Carleton University. I'm in my 3rd year of my Honours Bachelor of
            Computer Science degree with a focus in Cybersecurity. I've gained
            experience in programming through my school courses and my own
            personal projects. I aim to work as a Software Developer! This site
            is ongoing and will be updated with new projects and information as
            I progress through my degree. Feel free to reach out to me through
            the contact with my information below!
          </p>
        </div>
        <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
          <h3 className='text-3xl font-bold'>technologies i've worked with:</h3>
          <div className='flex flex-wrap space-x-4'>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              python
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              c
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              c++
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              java
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              javascript
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              html/css
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              react
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              node.js
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              express
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              postgresql
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              next.js
            </span>
            <span className='inline-block px-4 py-2 mt-4 text-base font-semibold text-white bg-gray-800 rounded-lg'>
              Qt
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
