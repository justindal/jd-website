import React from 'react'
import Button from './Button'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  children?: React.ReactNode
}

const ProjectCard = ({
  title,
  description,
  image,
  children,
}: ProjectCardProps) => {
  return (
    <div className='hero bg-base-200 rounded-xl'>
      <div className='hero-content flex flex-col'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <img src={image} className='max-w-sm rounded-lg shadow-2xl' />
        <p className='py-6'>{description}</p>
        {children}
      </div>
    </div>
  )
}

export default ProjectCard