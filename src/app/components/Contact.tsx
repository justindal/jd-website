import React from 'react'

const Contact = () => {
  return (
    <div
      id='contact'
      className='relative isolate bg-gray-700 py-24 sm:py-32 rounded-xl mt-3'
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            contact
          </h2>
          <p className='mt-4 text-lg text-white'>
            If you need to contact me, feel free to send me an email or connect
            with me on LinkedIn or GitHub.
          </p>
          <div className='mt-8'>
            <a
              href='mailto:justinbdaludado@gmail.com'
              className='btn btn-primary mr-4'
            >
              Email
            </a>
            <a
              href='https://github.com/justindal'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mr-4'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/justin-daludado-33752221a/'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
