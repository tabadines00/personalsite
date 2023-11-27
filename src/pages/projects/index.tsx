import React from 'react'
import Navbar from '@/components/Navbar'
import List from '@/components/List'
import Centered from '@/components/Centered'

function Projects() {
  return (
    <main>
      <section>
        <Navbar />
        <h1>Projects</h1>
        <Centered content= {
          <List className="w-10/12" />
        } />
        
      </section>
	  </main>
  )
}

export default Projects