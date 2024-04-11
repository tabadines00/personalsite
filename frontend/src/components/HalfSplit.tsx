import React from 'react'

function HalfSplit(props: any) {
  return (
    <div className='container px-4 mx-auto flex flex-row flex-grow items-center
                    space-y-0'>
        <div className="space-y-12 mx-auto w-auto">
            {props.left}
        </div>
        <div className="space-y-12 mx-auto w-auto">
            {props.right}
        </div>
    </div>
  )
}

export default HalfSplit