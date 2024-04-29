import React from 'react'
import ProjectCard from './ProjectCard'
import Button from './Button'

const Carousel = () => {
  return (
    <div className='carousel w-full'>
      <div id='slide1' className='carousel-item relative w-full'>
        <ProjectCard
          title='This Portfolio - 2024'
          description='I wrote this portfolio using React and TailwindCSS. I used Next.js to handle routing and deployment. The server is hosted on my own cloud instance using Oracle Cloud Infrastructure.'
          image='/images/portfolio_image.jpeg'
        >
          <a
            href='https://github.com/justindal/jd-website'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button text='Github link'></Button>
          </a>
        </ProjectCard>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <ProjectCard
          title='Grade Manager - 2023'
          description='A simple grade manager program to keep track of courses and grades. 
          It can keep track of all course and grade information as well as calulate marks and GPA.
          Written in C++ and sqlite3 for the database. Used Qt6 for the GUI. A branch exists for CLI
          version.'
          image='/images/grademanagerimage.png'
        >
          <a
            href='https://github.com/justindal/GradesManager'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button text='Github link'></Button>
          </a>
        </ProjectCard>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <ProjectCard
          title='Simple Chat App - 2022'
          description='A simple chat application that uses websockets to send messages between clients. 
          Written in Node.js and Express for the server and pure JS for the client.'
          image='/images/chatserver.png'
        >
          <a
            href='https://github.com/justindal/Chat-Server'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button text='Github link'></Button>
          </a>
        </ProjectCard>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' className='carousel-item relative w-full'>
        <ProjectCard
          title='Secret Santa Discord Bot - 2022'
          description='A discord bot that can be used to run a secret santa event in a discord server. Each
          user who signs up will be added to the pool of users and when the game starts, each user will be
          assigned a random user to gift to and be sent their Discord username. Written in Python using the
          discord.py library.'
          image='/images/discordss.png'
        >
          <a
            href='https://github.com/justindal/Secret-Santa-Discord-Bot'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button text='Github link'></Button>
          </a>
        </ProjectCard>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default Carousel
