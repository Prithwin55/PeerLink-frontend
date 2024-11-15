import { Label, MoreVert } from '@mui/icons-material'
import { Avatar, Button, CardHeader, IconButton } from '@mui/material'
import { blue, grey, red } from '@mui/material/colors'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

function PopularUserTemplate() {
  return (
    <CardHeader sx={{bgcolor:"#fcf5f5",marginTop:"10px"}}
        avatar=
        {
        <Avatar sx={{ bgcolor: blue[500] }} aria-label='recipe'>
        R
        </Avatar>
        }
      action={<Button>
          Follow
        </Button>}
        title="Ragav Bhattiya"
        subheader="@ragav125"
      />
  )
}

export default PopularUserTemplate