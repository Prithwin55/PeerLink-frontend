import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Backdrop, CardHeader, CircularProgress, IconButton, imageListClasses } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import PhotoIcon from '@mui/icons-material/Photo';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import CssPostModel from './postModel.module.css'
import { useState } from 'react';
import { useFormik } from 'formik';
import '../../utils/uploadToCloud'
import { uploadToCloud } from '../../utils/uploadToCloud';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../redux/post/post.action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};



export default function PostModal({open,handleClose}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
    //   const handleClose = () => setOpen(false);
const [isLoading, setIsLoading] = useState(false)
    const [srcImage, setsrcImage] = useState("")
    
const handleVideo=async(event) =>{
    console.log("videoLoaded")
    setIsLoading(true)
    const imageUrl = await uploadToCloud(event.target.files[0], "video")
    setsrcImage(imageUrl)
    setIsLoading(false)
    formik.setFieldValue("video",imageUrl)
}
    
const handleImage = async (event) => {
        setIsLoading(true)
        console.log("imageLoaded")
        const imageUrl = await uploadToCloud(event.target.files[0], "image")
        setsrcImage(imageUrl)
        setIsLoading(false)
        formik.setFieldValue("image", imageUrl)
        
        
}

    const formik = useFormik({
        initialValues: {
            caption: "",
            image: "",
            video: ""
        },
        onSubmit: (value) => {
            console.log(value)
            dispatch(createPostAction(value))
            formik.resetForm()
            setsrcImage("")
             handleClose()
    }
})  
    const handleModalClose = () => {
        setsrcImage("")
    formik.resetForm(); // Reset Formik values
    handleClose(); // Close the modal
  };
const dispatch=useDispatch()
return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
      <form onSubmit={formik.handleSubmit}> 
                      
                
        <CardHeader
            avatar=
            {
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
            </Avatar>
            }
            action={<IconButton aria-label='settings' onClick={handleModalClose}>
            <CloseIcon/>
            </IconButton>}
            title="Ragav Bhattiya"
            subheader="@ragav125"
      />
         <textarea
        id="caption"
        rows="4"
        cols="50" // Optional: Sets the width of the textarea
        placeholder="  Type here..."
                          onChange={formik.handleChange}
        value={formik.values.caption}                  
        style={{ resize: 'none',border:'2px solid silver',width:'100%' ,borderRadius:'10px'}} // Optional: Prevent resizing
                  />
            <div className={CssPostModel.createMain}>
                      <div className={CssPostModel.media}>
                          <label htmlFor='image' className={CssPostModel.media}>
                            <PhotoIcon />
                            <input type='file' accept='image/*' id='image' style={{display:'none'}} onChange={handleImage}/>
                            <p>Media</p>
                         </label>
                         
                     </div>

                      <div className={CssPostModel.video}>
                          <label htmlFor='video' className={CssPostModel.video} >
                            <VideocamIcon />
                            <input type='file' accept='video/*' id='video' style={{display:'none'}} onChange={handleVideo}/>
                                <p>Video</p>
                          </label>
                         
              </div>

                      <div className={CssPostModel.article}>
                          <label htmlFor='image' className={CssPostModel.article}>
                            <ArticleIcon />
                            <input type='file' accept='image/*' id='image' style={{display:'none'}}/>
                            <p>Articel</p>
                          </label>
                       
              </div>
              
            </div>
             <div>
                      {srcImage?<input type='image' width='200px' src={srcImage} alt='Image not available' />:""}
                  </div>
            <div  style={{ marginTop: '10px', display:'flex',justifyContent:'flex-end'}}>
                 <Button variant="outlined" type='submit'>Post</Button>      
                  </div>
                  <Backdrop
                        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                        open={isLoading}
                        onClick={handleClose}
                        >
                        <CircularProgress color="inherit" />
                  </Backdrop>
         </form>        
        </Box>
      </Modal>
    </div>
  );
}