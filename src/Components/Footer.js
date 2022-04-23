import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/home'>
        <i className="fas fa-house "></i>
      </Link>
      <i className="fas fa-search"></i>
      <i className="fas fa-microphone-alt"></i>
      <Link to='/notification'>
        <i className="far fa-bell"></i>
      </Link>
      <Link to='/messages'>
        <i className="far fa-envelope"></i>
      </Link>
    </div>
  )
}

export default Footer
