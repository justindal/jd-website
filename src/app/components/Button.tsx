import React from 'react'

interface ButtonProps {
  text: string
  children?: React.ReactNode
}

const Button = ({text, children}: ButtonProps) => {
  return <button className='btn btn-primary'>{text}</button>
}

export default Button
