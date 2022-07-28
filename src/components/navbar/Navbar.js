import React from 'react'
// import { BiArrowToBottom } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

function navbar() {
  return (

    <div className='navbar-container'>
      <div className='title'>
        <h4>Software Engineer</h4>
      </div>
      <div className='nav-buttons'>
        <nav >
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
          </ul>
        </nav>
      </div>
    </div>


  )
}

export default navbar