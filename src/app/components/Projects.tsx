import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div
      id='projects'
      className='relative isolate bg-gray-800 py-24 sm:py-32 rounded-xl mt-3'
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            projects
          </h2>
          <div className='flex flex-wrap space-x-4 p-4'>
            <ProjectCard title='Project1' image='/grademanagerimage.png' description='desc'></ProjectCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
