import { Link } from 'gatsby'
import React from 'react'

function Navbar() {
  return (
    <nav>
        <h1>Thomas Abadines</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Portfolio</Link>
        </div>
    </nav>
  )
}

export default Navbar