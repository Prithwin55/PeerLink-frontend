import React from 'react'
import './Authentication.css'
import { Outlet } from 'react-router-dom'
import ParticlesComponent from '../../../components/particles/ParticlesComponent'


function Authentication() {
  return (
    
    <div className='container'>
      <ParticlesComponent id="particle" />
      <div className='column'>
              <Outlet/>
        </div>
        
    </div>
    
  
  )
}

export default Authentication