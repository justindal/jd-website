import React from 'react'

const Contact = () => {
    return (
        <div
          id='contact'
          className='relative isolate bg-gray-900 py-24 sm:py-32 rounded-xl mt-3'
        >
          <div
            className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
            aria-hidden='true'
          ></div>
    
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                contact
              </h2>
            </div>
          </div>
        </div>
      )
}

export default Contact