import React, { useEffect, useState }from 'react'
import { GetLocalidades } from '../../api'
import { LocalidadesPage } from './LocalidadesPage/LocalidadesPage';


export const Localidades = ()=> {
 
  const [Localidad, setLocalidad] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await GetLocalidades();
      setLocalidad(data) 
     
    
    } catch (error) {
      console.error('Error al obtener las localidades', error);
    }
  };
  fetchData();
  //[var] se renderiza cuando la variable cambie 
}, []);
console.log("localidades", Localidad)  
    return (
      <div>
        {Localidad.map((Localidad)=>(<LocalidadesPage key={Localidad.name} data={Localidad} />))}
        </div>
       //aca vamos a crear las tarjetas, con la cantidad de pj que tengamos
    );
}
