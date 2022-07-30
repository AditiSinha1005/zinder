import React from 'react'
import Image from 'next/image'
function Thubnails({data}) {
    const imagepath =  "https://image.tmdb.org/t/p/original"
  return (
    <div>
        <div className="m-2 ">
        <Image className="contain hover:animate-pulse hover:cursor-pointer"
        src={ `${imagepath}${data.poster_path}`}
       
        width={300}
        height={300}
    />
    <div>
    <p className='text-sm'>{data.overview.substr(0,35)}..</p>
    </div>
    <div>
    <p>{data.original_title}</p>
    </div>
    
        </div>
    </div>
  )
}

export default Thubnails