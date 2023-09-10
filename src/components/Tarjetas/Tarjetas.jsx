import React from 'react';
import "./Tarjetas.css";
import { Link } from 'react-router-dom';

// Componente para mostrar una tarjeta de personaje
export default function Tarjetas({ Data }) {
  return (
    <div className='container'>
      <div className='Tarjeta'>
        {/* Mostrar el nombre del personaje */}
        <h2>{Data.name}</h2>
        {/* Mostrar la imagen del personaje */}
        <img src={Data.image} alt=""></img>
        {/* Enlace para ver detalles del personaje */}
        <Link to={`/${Data.id}`}>Detalles</Link>
      </div>
    </div>
  );
}
