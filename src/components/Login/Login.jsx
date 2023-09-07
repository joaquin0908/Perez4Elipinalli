import "./Login.css"
import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"




export default function Login() {
  const [nombre, setNombre] = useState ("")
  const [contraseña, setContraseña] = useState ("")
  const [error, setError] = useState(false)  
  const navigate = useNavigate()
  
 const handleSubmit = (e) =>{
    e.preventDefault()
    if(nombre === "" || contraseña === ""){
       setError(!error)
       return
    }
   navigate("/") 
 }

 return (
     <section>
        <h1>Login</h1>
        <form 
        className="Login"
        onSubmit={handleSubmit}
        >
     <input 
     type="text"
     value={nombre}
     onChange={e => setNombre(e.target.value)}
     />
     <input type="password" 
     value={contraseña}
     onChange={e => setContraseña(e.target.value)}
     />
     <button> Inciar sesion</button>
     </form>
     {error && <p>Todos los campos son obligatorios</p>}
    </section>
    
    )
}
