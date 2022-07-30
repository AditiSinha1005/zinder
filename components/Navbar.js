import React from 'react'
import request from '../utils/requests'
function Navbar() {
  return (
    <div>
    <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(request).map(([key,{title,url}])=>(
            <h2 key={key} className="cursor-pointer hover:animate-bounce">{title}</h2>
        ))}
    </div>
    </div>
   
  )
}

export default Navbar