import React, { useState } from 'react'
import Csscreatepost from './CreatePost.module.css'
import PersonIcon from '@mui/icons-material/Person';
import PhotoIcon from '@mui/icons-material/Photo';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostModal from '../postModel/postModel';

function CreatePost() {
    
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
    
function handleCreatePost() {
    handleOpen(true)
}

  return (
      <div className={Csscreatepost.createMain}>
          <div className={Csscreatepost.topitem}>
            <PersonIcon sx={{ fontSize: "40px" }} />
              <input className={Csscreatepost.input} type='text' placeholder='  Create a post...' onClick={handleCreatePost}/>
          </div>

          <div className={Csscreatepost.bottomitem}>
              <div className={Csscreatepost.media}>
                  <PhotoIcon onClick={handleCreatePost} />
                  <p>Media</p>
              </div>

              <div className={Csscreatepost.video}>
                  <VideocamIcon onClick={handleCreatePost}/>
                  <p>Video</p>
              </div>

              <div className={Csscreatepost.article}>
                  <ArticleIcon onClick={handleCreatePost}/>
                  <p>Articel</p>
              </div>
              <PostModal open={ open} handleClose={ handleClose} />
          </div>
      </div>
  )
}

export default CreatePost