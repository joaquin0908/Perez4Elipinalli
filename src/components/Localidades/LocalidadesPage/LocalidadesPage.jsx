import React from 'react'

export const LocalidadesPage = ({data})=> {
  return (
    <div>
     <p>{data.name}</p>
     <p>{data.type}</p>
     <p>{data.dimension}</p>
    </div>
  )
}
