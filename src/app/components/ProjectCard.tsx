import React from 'react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  return (
    <div className='hero h-64 bg-base-200 rounded-xl'>
      <div className='hero-content flex-col'>
        <img src={image} className='max-w-sm rounded-lg shadow-2xl' />
        <div>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <p className='py-6'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
