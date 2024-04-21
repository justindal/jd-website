'use client'
import React from 'react'

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className='navbar bg-base-300 rounded-xl sticky top-0 z-50 mt-3'>
      <div className='navbar-start'>
        <div
          tabIndex={0}
          role='button'
          className='btn btn-ghost lg:hidden'
          onClick={scrollToTop}
        ></div>
        <a className='btn btn-ghost text-xl'>JD</a>
      </div>
      <div className='navbar-center flex'>
        <ul className='menu menu-horizontal px-1 '>
          <li>
            <a href='#about'>about</a>
          </li>
          <li>
            <a href='#projects'>projects</a>
          </li>
          <li>
            <a href='#contact'>contact</a>
          </li>
          <li>
            <a href='/JustinDaludadoResume.pdf'>resume</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='flex space-x-4'>
          <a
            href='https://github.com/justindal'
            className='btn btn-square btn-ghost'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.088 2.912.833.091-.646.349-1.088.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 7.833c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.547 1.376.203 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.936.359.31.678.919.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .267.18.578.688.48A10.017 10.017 0 0022 12c0-5.523-4.477-10-10-10z'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
