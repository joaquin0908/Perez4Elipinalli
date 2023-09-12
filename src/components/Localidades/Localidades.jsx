import React, { useEffect, useState } from 'react';
import { GetLocalidades } from '../../api';
import { LocalidadesPage } from './LocalidadesPage/LocalidadesPage';
import  "./Localidades.css"

// Componente que muestra una lista de localidades
export const Localidades = () => {
  // Estado para almacenar la lista de localidades
  const [Localidad, setLocalidad] = useState([]);

  useEffect(() => {
    // Función para obtener datos de las localidades
    const fetchData = async () => {
      try {
        const data = await GetLocalidades();
        setLocalidad(data);
      } catch (error) {
        console.error('Error al obtener las localidades', error);
      }
    };

    // Llamar a la función fetchData una vez al montar el componente ([] como dependencia)
    fetchData();
  }, []);

  console.log("localidades", Localidad);

  return (
    <div>
      {/* Mapear la lista de localidades y renderizar cada una */}
      {Localidad.map((Localidad) => (<LocalidadesPage key={Localidad.name} data={Localidad} />))}
      <p>{Localidad.type}</p>
      <p>{Localidad.dimension}</p>
    </div>
   
  );
}
