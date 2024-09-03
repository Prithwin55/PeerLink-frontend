import { Avatar } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Cssstory from './StoryCircle.module.css'
function StoryCircle() {
  return (
    <div className={Cssstory.addStory}>
          <Avatar sx={{ width: "5rem", height: "5rem" }}
              src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg'
          />

                <p>Sha Ruk</p>
    </div>
  )
}

export default StoryCircle