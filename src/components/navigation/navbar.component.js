import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './navbar.scss';

function NavBar() {
  return (
    <div className="nav">
      <div className="left">
        <img className="logo" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" } alt="Logo"/>
      </div>
      <div className="middle">
        <NavLink className='link' exact to="/" activeStyle={{ textTransform: 'uppercase', color: 'black' }} >home</NavLink>
        <NavLink className='link' to="/blog" activeStyle={{ textTransform: 'uppercase', color: 'black' }}>blog</NavLink>
        <NavLink className='link' to="/about" activeStyle={{ textTransform: 'uppercase', color: 'black' }}>about</NavLink>
      </div>
      <div className="right">
        <Link className='button' to='/sign-in'>Sign In</Link>
        <Link className='button register' to='/register'>Register</Link>
      </div>
    </div>
  )
}

export default NavBar
