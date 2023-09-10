import axios from "axios";

// Crear una instancia de Axios con la base URL de la API de Rick and Morty
const instance = axios.create({ 
    baseURL: "https://rickandmortyapi.com/api"
});

// Función para obtener la lista de personajes
export const GetPersonajes = async () => {
    const url = "/character";
    const response = await instance.get(url);
    return response.data.results;
}

// Función para obtener los detalles de un personaje por su ID
export const GetPersonajeId = async (id) => {
    const url = `/character/${id}`;
    const response = await instance.get(url);
    console.log(response);
    return response.data;
}

// Función para obtener la lista de localidades
export const GetLocalidades = async () => {
    const url = `/location`;
    const response = await instance.get(url);
    return response.data.results;
}
