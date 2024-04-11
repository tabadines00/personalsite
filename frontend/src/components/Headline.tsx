import React from 'react'

function Headline(props: any) {
  return (
    <div className='p-8 bg-blue-300 mx-auto'>
        <h1 className='mx-32 font-bold text-size-24 text-white text-3xl'>{props.title}</h1>
    </div>
  )
}

export default Headline