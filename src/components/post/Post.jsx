import React from 'react'
import Csspost from './Post.module.css'
import { Avatar } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from '../storyCircle/storyCircle';
import CreatePost from '../createPost/CreatePost';



function Post() {

    const story = [1, 2, 3, 4,5,6];

    return (
      <>
        <div className={Csspost.middleMain}>
           <div className={Csspost.storyMain}>
                <div className={Csspost.addStory}>
                    <Avatar sx={{ width: "5rem", height: "5rem" }}>
                            <AddIcon sx={{ width: "3rem",height:"3rem" }} />
                    </Avatar>
                    <p>New</p>
                        
                </div>
                   
                  {
                    story.map(() =>  <StoryCircle/>)    
                  }
            </div>
            <CreatePost/>
        </div>
        <div className={Csspost.rightMain}>
                
        </div>
     </>
  )
}

export default Post