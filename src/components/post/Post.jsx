import React from 'react'
import Csspost from './Post.module.css'
import { Avatar, Input, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import StoryCircle from '../storyCircle/storyCircle';
import CreatePost from '../createPost/CreatePost';
import PostCard from '../postcard/PostCard';
import { SearchOffOutlined } from '@mui/icons-material';
import PopularUserTemplate from '../popularUserTemplate/PopularUserTemplate'



function Post(props) {

  const story = [1, 2, 3, 4, 5, 6, 5];
  const posts = [1, 2, 3]
  const popularUser=[1,2,3,4,5,3,4,4,4,4,4,4,4,4,44]

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
          <CreatePost />
          <div className={Csspost.postCardMain}>
                  
            {
              posts.map((item) => <PostCard />)
            }
                  
          </div>
                

        </div>
        <div className={Csspost.rightMain}>
          <TextField id="filled-basic" label="Search user" variant="outlined" sx={{ width: "100%", borderRadius: "20px", marginTop: "10px" }} />
          <div className={Csspost.textItem}>
            <p className={Csspost.text}>Suggessions for you</p>
            <p className={Csspost.text}>View All</p>
          </div>
          <div  className={Csspost.items}>
              {
                popularUser.map((item) =>  <PopularUserTemplate/>)
              }
          </div>
        </div>
     </>
  )
}

export default Post