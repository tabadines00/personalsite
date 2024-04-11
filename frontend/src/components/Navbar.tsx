import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import React from 'react'

export default function Navbar() {
  return (
    <div className="h-auto w-screen p-6">
      <ul className='justify-center m-0 flex space-x-6 flex-row'>
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services">Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
      </ul>
    </div>
  )
}
