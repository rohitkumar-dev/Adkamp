import React from 'react'

function Button({
    className="",
    name,
}) {
  return (
    <div className={` ${className} px-3 md:px-5 h-9 md:h-11 rounded-4xl  bg-amber-600 text-white`}>
        <button className='h-full w-full font-medium text-xs md:text-sm cursor-pointer '>
            {name}
        </button>
    </div>
  )
}

export default Button

