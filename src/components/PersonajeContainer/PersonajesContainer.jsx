import React, { useEffect, useState } from "react";
import { GetPersonajes } from "../../api";
import Tarjetas from "../Tarjetas/Tarjetas";
import "./PersonajesContainer.css";

// Componente para mostrar una lista de personajes
export default function PersonajesContainer() {
  // Estado para almacenar la lista de personajes
  const [Personajes, setPersonajes] = useState([]);

  useEffect(() => {
    // Función para obtener los datos de los personajes
    const fetchData = async () => {
      try {
        const data = await GetPersonajes();
        // Actualiza el estado con los datos de los personajes obtenidos
        setPersonajes(data);
      } catch (error) {
        console.error("Error al obtener los personajes", error);
      }
    };

    // Llamar a fetchData una vez al montar el componente ([] como dependencia)
    fetchData();
  }, []);


  return (
<div className="Contenedor">
  <h1>ej</h1>
      {/* Mapear la lista de personajes y renderizar una tarjeta por cada uno */}
      {Personajes.map((Personaje) => (
        <Tarjetas key={Personaje.id} Data={Personaje} />
      ))}
    </div>
    // Aquí se crearán las tarjetas, una por cada personaje en la lista
  );
}
