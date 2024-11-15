import React from 'react'
import Cssprofile from './profile.module.css'
import { Avatar, Box, Button, CardContent, Tab, Tabs } from '@mui/material'
import image from '../../assets/loginBackground.jpg'
import { blue, red } from '@mui/material/colors'
import PostCard from '../postcard/PostCard'
import Reels from '../reels/Reels'
function Profile() {
    const [value, setValue] = React.useState('post');
    const posts = [1, 2, 3, 4, 5];
    const saved = [1, 2];
    const reels = [1, 2, 3, 4, 5,1,1,1,1,1];
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleEdit = () => {
        
    }
    
  return (
      <div className={Cssprofile.profileMain}>
          <img src={image} alt="not available" style={{ width: "100%", height: "40%" }} />
          <Avatar className={Cssprofile.avtar} sx={{ width: "10rem", height: "10rem" ,position:"absolute" }} src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg' />
          <div className={Cssprofile.button}>
              {true ? <Button variant='outlined' sx={{ borderRadius:"20px" }} onClick={handleEdit}>Edit Profile</Button> :
                  <Button variant='outlined' sx={{ bgcolor: blue[500], color: "black" }}>Follow</Button>
              }
          </div>

          <div className={Cssprofile.userName}>
              <h2 style={{fontSize:"30px"}}>Prithwin Ratnan A</h2>
              <p>@dogydon 123</p>
          </div>

          <div className={Cssprofile.followers}>
              <p>41 Posts</p>
              <p>48 Followers</p>
              <p>440 Following</p>
          </div>
          <Box sx={{ width: '100%',marginTop:"10px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab value="post" label="Post"  />
          <Tab value="saved" label="Saved"  />
          <Tab value="reels" label="Reels"  />
          <Tab value="repost" label="Repost"  />
        </Tabs>
      </Box>
        </Box>
          <div className={Cssprofile.post}>
            {value === 'post' ? posts.map(() => <div className={Cssprofile.card}><PostCard/></div>) : ""}
          </div>
          {value === 'saved' ? saved.map(() => <PostCard />) : ""}
          <div className={Cssprofile.reel}>
            {value==='reels'?reels.map(()=><Reels/>):""}
          </div>
          
      </div>
  )
}

export default Profile