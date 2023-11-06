import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

function Layout({ children }) {
  return (
    <div className="Layout">
        <Navbar />
        <div className='content'>
            {children}
        </div>
        <footer>
            <p>Copyright 2023 Thomas Abadines</p>
        </footer>
    </div>
  )
}

export default Layout