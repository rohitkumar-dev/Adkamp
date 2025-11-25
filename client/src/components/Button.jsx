import React from 'react'

function Button({
    className="",
    name,
}) {
  return (
    <div className={` ${className} w-40 h-10 md:h-13 rounded-4xl  bg-amber-500 `}>
        <button className='h-full w-full font-medium text-sm md:text-lg cursor-pointer'>
            {name}
        </button>
    </div>
  )
}

export default Button

