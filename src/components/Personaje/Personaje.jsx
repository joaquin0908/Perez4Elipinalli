import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { GetPersonajeId } from '../../api'



export const Personaje = () => {
  const {id} = useParams()
  const [Personaje, setPersonaje] = useState({})

  
    const fetchData = async () => {
      try {
        const data = await GetPersonajeId(id);
        /* console.log(data) */
        setPersonaje(data)
      } catch (error) {
        console.error('Error al obtener los personajes', error);
      }
    };
    useEffect(() => {
    fetchData();
    //[var] se renderiza cuando la variable cambie 
  }, [id]);

    return (
    <div>
        <Link to={"/"}> Volver </Link>
        <img src={Personaje.image} alt=""></img>
        <p>{Personaje.name}</p>
        <p>{Personaje.status}</p>
        <p>{Personaje.species}</p>

    </div>
  )
}
