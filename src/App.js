import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import PersonajesContainer from './components/PersonajeContainer/PersonajesContainer';
import { Route, Routes } from 'react-router-dom';
import { Personaje } from './components/Personaje/Personaje';
import NavBar from './components/Navbar/Navbar';
import { Localidades } from './components/Localidades/Localidades';
function App() {
  return (
    <div className="App">
    {/* Este es el contenedor principal de la aplicación */}
    <NavBar />
    {/* La barra de navegación de la aplicación */}
    <Routes>
      {/* Aquí definimos las rutas y sus componentes asociados */}
      <Route element={<PersonajesContainer />} path='/'></Route>
      {/* Ruta para mostrar la lista de personajes */}
      <Route element={<Login />} path='/Login'> </Route>
      {/* Ruta para la página de inicio de sesión */}
      <Route element={<Personaje />} path="/:id"/>
      {/* Ruta para mostrar detalles de un personaje específico */}
      <Route element={<Localidades />} path='/Localidades'></Route>
      {/* Ruta para mostrar la lista de localidades */}
    </Routes>
  </div>
  
  );
}

export default App;
