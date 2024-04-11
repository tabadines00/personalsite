import React from 'react'
import Navbar from '@/components/Navbar'
import List from '@/components/List'
import Centered from '@/components/Centered'
import Headline from '@/components/Headline'

function Projects() {
  return (
    <main>
      <section>
        <Navbar />
        <Headline title="Projects" />
        <Centered content= {
          <List className="w-96" />
        } />
        
      </section>
	  </main>
  )
}

export default Projects