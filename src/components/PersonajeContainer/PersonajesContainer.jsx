import React,{ useEffect, useState} from 'react'
import { GetPersonajes } from '../../api'
import Tarjetas from '../Tarjetas/Tarjetas';


export default function PersonajesContainer() {
   
    const [Personajes, setPersonajes] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await GetPersonajes();
            /* console.log(data) */
            setPersonajes(data);
          } catch (error) {
            console.error('Error al obtener los personajes', error);
          }
        };
    
        fetchData();
        //[] se va a renderizar una sola vez 
      }, []);
     
  return (
    <div>
        {Personajes.map((Personajes)=>(<Tarjetas key={Personajes.id} Data={Personajes} />))}
      
    </div> //aca vamos a crear las tarjetas, con la cantidad de pj que tengamos
  );
}
