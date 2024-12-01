import React, { useEffect } from 'react'
import Cssprofile from './profile.module.css'
import { Avatar, Box, Button, CardContent, Tab, Tabs } from '@mui/material'
import image from '../../assets/loginBackground.jpg'
import { blue, red } from '@mui/material/colors'
import PostCard from '../postcard/PostCard'
import Reels from '../reels/Reels'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction } from '../../redux/auth/auth.action'
import ProfileModel from './profileModel'
function Profile() {
    const [value, setValue] = React.useState('post');
    const posts = [1, 2, 3, 4, 5];
    const saved = [1, 2];
    const reels = [1, 2, 3, 4, 5,1,1,1,1,1];
    const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  
  const { loading, payload, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const handleEdit = () => {
        
    }
    useEffect(() => {
      const jwt = localStorage.getItem("jwt");
      dispatch(getProfileAction(jwt))
  },[dispatch])
  return (
    
      <div className={Cssprofile.profileMain}>
          <img src={image} alt="not available" style={{ width: "100%", height: "40%" }} />
          <Avatar className={Cssprofile.avtar} sx={{ width: "10rem", height: "10rem" ,position:"absolute" }} src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg' />
          <div className={Cssprofile.button}>
              {true ? <Button variant='outlined' sx={{ borderRadius:"20px" }} onClick={()=>handleOpen()}>Edit Profile</Button> :
                  <Button variant='outlined' sx={{ bgcolor: blue[500], color: "black" }}>Follow</Button>
              }
          </div>

          <div className={Cssprofile.userName}>
              <h2 style={{fontSize:"30px"}}>{payload?.firstName+" "+payload?.lastName}</h2>
              <p>@{payload?.firstName.toLowerCase()}</p>
          </div>

          <div className={Cssprofile.followers}>
              <p>{payload?.posts.length} Posts</p>
              <p>{payload?.followers.length} Followers</p>
              <p>{payload?.following.length} Following</p>
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
      <ProfileModel open={open} close={handleClose} payload={ payload} />
      </div>
  )
}

export default Profile