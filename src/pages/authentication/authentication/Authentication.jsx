import React, { useState } from 'react'
import './Authentication.css'
import { Outlet } from 'react-router-dom'
import ParticlesComponent from '../../../components/particles/ParticlesComponent'
import Login from '../login/Login'
import Register from '../register/Register'



function Authentication() {

  const [reg, setReg] = useState(false);

  return (
    
    <div className='container'>
      <ParticlesComponent id="particle" />
      <div className='column'>
        {reg ? <Register reg={setReg} />:<Login reg={setReg}/>}
        </div>
        
    </div>
    
  
  )
}

export default Authentication