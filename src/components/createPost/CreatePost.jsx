import React from 'react'
import Csscreatepost from './CreatePost.module.css'
import PersonIcon from '@mui/icons-material/Person';
import PhotoIcon from '@mui/icons-material/Photo';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
function CreatePost() {
  return (
      <div className={Csscreatepost.createMain}>
          <div className={Csscreatepost.topitem}>
            <PersonIcon sx={{ fontSize: "40px" }} />
              <input className={Csscreatepost.input} type='text' placeholder='  Create a post...'/>
          </div>

          <div className={Csscreatepost.bottomitem}>
              <div className={Csscreatepost.media}>
                  <PhotoIcon />
                  <p>Media</p>
              </div>

              <div className={Csscreatepost.video}>
                  <VideocamIcon />
                  <p>Video</p>
              </div>

              <div className={Csscreatepost.article}>
                  <ArticleIcon />
                  <p>Articel</p>
              </div>
          </div>
      </div>
  )
}

export default CreatePost