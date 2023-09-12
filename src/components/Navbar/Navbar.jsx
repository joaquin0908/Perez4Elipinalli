import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/logo.jpg"
/* componente para la barra de navegacion */
export default function NavBar() {
  return (
    <div className='navBar'>
        <div className='logoNavBar'>  <img width={60} src={Logo} ></img> </div>
        <div className='botonesNavBar'>
            <NavLink to="/" className='botonNavBar'>Personajes</NavLink>
            <NavLink to="/Localidades" className='botonNavBar'>Localidades</NavLink>
            <NavLink to="/Login" className='botonNavBar'>Login</NavLink>
        </div>
    </div>
  )
}