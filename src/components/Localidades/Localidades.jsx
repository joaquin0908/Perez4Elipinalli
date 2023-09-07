import React, { useEffect, useState }from 'react'
import { GetLocalidades } from '../../api'


export const Localidades = ()=> {
 
  const [Localidad, setLocalidad] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await GetLocalidades();
      
      
    } catch (error) {
      console.error('Error al obtener las localidades', error);
    }
  };
  fetchData();
  //[var] se renderiza cuando la variable cambie 
}, []);
console.log(data)
    return (
      <div>
        localidad
        </div>
       //aca vamos a crear las tarjetas, con la cantidad de pj que tengamos
    );
}
