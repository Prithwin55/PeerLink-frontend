import React from 'react'
import CssHome from './Home.module.css'
import SideBar from '../../components/sidebar/SideBar'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
      <div className={CssHome.main}>
          
          <SideBar className={CssHome.sidebar } />
          <Outlet/>
          
          
      </div>
  )
}

export default Home