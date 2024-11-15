import React, { useEffect } from 'react'
import CssHome from './Home.module.css'
import SideBar from '../../components/sidebar/SideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Post from '../../components/post/Post'
function Home() {

  const navigate = useNavigate();

  useEffect(() => {
      navigate("/home/posts")
  }, [])
  
  return (
    
    
      <div className={CssHome.main}>
          
          <SideBar className={CssHome.sidebar} />
          <Outlet/>
      
       
      </div>
  )
}

export default Home