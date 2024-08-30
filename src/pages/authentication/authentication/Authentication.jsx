import React from 'react'
import './Authentication.css'
import { Outlet } from 'react-router-dom'

function Authentication() {
  return (
      <div className='container'>
          <div className='column'>
              <Outlet/>
         </div>
      </div>
  )
}

export default Authentication