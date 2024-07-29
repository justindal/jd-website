import React from 'react'
import Button from './Button'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string 
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
        {/* <img src={image} className='max-w-sm rounded-lg shadow-2xl' /> */}
        <Image src={image} alt={title} width={500} height={500} className='max-w-sm rounded-lg shadow-2xl' />
        <p className='py-6'>{description}</p>
        {children}
      </div>
    </div>
  )
}

export default ProjectCard