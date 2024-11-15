import React from 'react'
import Cssreels from './Reels.module.css'
function Reels() {
  return (
      <div className={Cssreels.card}>
          <video controls src='https://videos.pexels.com/video-files/28078305/12294996_1440_2560_60fps.mp4'/>
      </div>
  )
}

export default Reels