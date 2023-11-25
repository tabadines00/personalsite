import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <ul className='h-16 w-screen m-0 flex flex-row bg-gray-900 text-white'>
        <li className="navbar-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">ABOUT US</Link>
        </li>
        <li className="navbar-item">
            <Link to="/contact">CONTACT</Link>
          </li>
      </ul>
    </div>
  )
}
