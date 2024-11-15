import React from 'react'
import Csspostcard from'./PostCard.module.css'
import { Avatar, Card, CardContent, CardHeader, IconButton, Input, Typography} from '@mui/material'
import {  Face, MoreVert} from '@mui/icons-material'
import image from'../../assets/pexels-pixabay-531880.jpg'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Link } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
function PostCard() {
  return (
    <Card  sx={{marginTop:"15px"}}>
      <CardHeader
        avatar=
        {
        <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
        R
        </Avatar>
        }
        action={<IconButton aria-label='settings'>
          <MoreVert/>
        </IconButton>}
        title="Ragav Bhattiya"
        subheader="@ragav125"
      />
      <CardContent >
        <img src={image} />
        <div className={Csspostcard.likeRow}> 
          <div className={Csspostcard.likeDiv}>
            <IconButton>
              {true?<FavoriteIcon sx={{ height: "40px", width: "29px" }}/>:<FavoriteBorderIcon sx={{ height: "40px", width: "29px" }} />}
           </IconButton>
            <IconButton>
              <ModeCommentOutlinedIcon sx={{height:"40px",width:"29px"}} />
            </IconButton>
            <IconButton>
            <SendOutlinedIcon sx={{height:"40px",width:"29px"}}/>
            </IconButton>
          </div>
          <IconButton>
            {true?<BookmarkIcon  sx={{ height: "40px", width: "29px" }}/>:<BookmarkBorderOutlinedIcon sx={{ height: "40px", width: "29px" }} />}
          </IconButton>
        </div>
        <Typography sx={{ fontSize: 'sm' }}>
          <Link
            component="button"
            color="neutral"
            textColor="text.primary"
            sx={{ fontWeight: 'lg' }}
          >
            MUI
          </Link>{' '}
          The React component library you always wanted and this is awsome project to do
        </Typography>

       
        <div className={Csspostcard.comment}>
          <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
              <Face />
            </IconButton>
            <Input
              variant="plain"
              size="sm"
              placeholder="Add a comment…"
              sx={{ flex: 1, px: 0, '--Input-focusedThickness': '0px',width:"390px"}}
            />
          <IconButton>
              <SendIcon sx={{marginLeft:"10px"}}/>
          </IconButton>
          </div>
     
      </CardContent>
   
     </Card>
   
  )
}

export default PostCard