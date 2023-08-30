import React,{ useEffect, useState} from 'react'
import { GetPersonajes } from '../../api'


export default function Login() {
   
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
        
      }, []);
      console.log("aca vemos los pj",Personajes)
  return (
    <div>Login</div>
  )
}
