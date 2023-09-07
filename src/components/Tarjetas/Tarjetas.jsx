import React from 'react'
import "./Tarjetas.css"
import { Link } from 'react-router-dom';
export default function Tarjetas({Data}) {

  return (
    <div className='container'>
    <div className='Tarjeta'>
      <h2>{Data.name}</h2>
      <img src={Data.image} alt=""></img>
      <Link to={`/${Data.id}`}>Detalles</Link>
    </div>
    </div>
  );
}
