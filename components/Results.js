import React from 'react'
import Thubnails from './Thubnails'

function Results({results}) {


  
  
  return (
    <div className='flex flex-wrap justify-around'>
      {results.map((data,index)=>{
        return(
         
          <Thubnails key={index} data={data}/>
         
        )
      })}
    </div>
  )
}

export default Results