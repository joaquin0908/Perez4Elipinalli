import React from 'react'
import "./Tarjetas.css"

export default function Tarjetas({Data}) {

  return (
    <div className='Tarjeta'>
      <h2>{Data.name}</h2>
      <img src={Data.image} alt=""></img>
    </div>
  );
}
