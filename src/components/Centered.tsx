import React from 'react'

function Centered(props: any) {
  return (
    <div className='container flex flex-col items-center justify-center mx-auto mt-10'>
        {props.content}
    </div>
  )
}

export default Centered