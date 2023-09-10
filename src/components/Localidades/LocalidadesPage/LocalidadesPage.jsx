import React from 'react'



export const LocalidadesPage = ({data})=> {
  return (
    <div className='container'>
     <p>{data.name}</p>
     <p>{data.type}</p>
     <p>{data.dimension}</p>
    </div>
  )
}
