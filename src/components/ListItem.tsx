import React from 'react'
import { Link } from 'gatsby'

function ListItem(props: any) {
  return (
    <div className='my-4 border-b-2'>
        <Link to={"/projects/" + props.link} className='text-xl text-blue-300 hover:text-blue-950'>{props.title}</Link>
        <p className='text-gray-600'>{props.description}</p>
    </div>
  )
}

export default ListItem