import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
      
      <header>
        <Link><h1>CRUD App</h1></Link>
        <nav>
          <NavLink to="posts">Posts</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>

    </div>
  )
}

export default Nav