import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import PersonajesContainer from './components/PersonajeContainer/PersonajesContainer';
import { Route, Routes } from 'react-router-dom';
import { Personaje } from './components/Personaje/Personaje';
import NavBar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route element={<PersonajesContainer/>} path='/'></Route>
        <Route element={<Login/>} path='/Login'> </Route>
        <Route element={<Personaje/>} path="/:id"/>
      </Routes>

    </div>
  );
}

export default App;
