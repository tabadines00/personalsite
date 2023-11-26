import React from 'react'

function HalfSplit(props: any) {
  return (
    <div className='container flex flex-row px-4 mx-auto mt-10
                    space-y-0'>
        <div className="space-y-12 w-1/2">
            {props.left}
        </div>
        <div className="space-y-12 w-1/2">
            {props.right}
        </div>
    </div>
  )
}

export default HalfSplit