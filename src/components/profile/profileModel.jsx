import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cssprofile from './profile.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';
import image from '../../assets/loginBackground.jpg'
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileAction } from '../../redux/auth/auth.action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
    p: 4,
  overflowY: 'scroll'
};



export default function ProfileModel({ open, close, payload }) {
    const dispatch = useDispatch()
    const { error,loading } = useSelector((state) => state.auth);
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [email, setEmail] = useState("")
    
   useEffect(()=> {
       setFname(payload?.firstName)
       setEmail(payload?.email)
       setLname(payload?.lastName)
    },[])

    function handleSave(item) {
        close()
        const object = {
            firstName: fName,
            lastName: lName,
            email: email
        }
        dispatch(updateProfileAction(object))
        console.log(error)
    }

  return (
    <div className= {Cssprofile.mainScroll}>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
          >
        
        <Box sx={style}>
                  <div className= {Cssprofile.mainScroll}>
                  <div className={Cssprofile.editDiv}>
                      <div className={Cssprofile.boxEdit}>
                      <Button  startIcon={<CloseIcon />} onClick={()=>close()}>Close</Button>
 
                        <h1 style={{marginBottom:'4px'}}>EDIT PROFILE</h1>
                           
                            
                      </div>
                    <Button onClick={()=>handleSave()}>SAVE</Button>   
                      </div>
                      <div style={{height:"10px"}}>
                          
                      </div>
                  <div >
                    <img src={image} alt="not available" style={{ width: "100%", height: "40%" }} />
                    <Avatar className={Cssprofile.avtarEdit} sx={{ width: "10rem", height: "10rem" ,position:"absolute" }} src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg' />
                    <div className={Cssprofile.button}>
                       
                    </div>

                    <div className={Cssprofile.userName}>
                              <h2 style={{ fontSize: "30px" }}>{payload?.firstName+" "+payload?.lastName }</h2>
                        <p>@{payload?.firstName.toLowerCase()}</p>
                    </div>
                      
                      
                  </div>
                  <div className={Cssprofile.scrollDiv}>
                      <input type='text'className={Cssprofile.input }  placeholder='Firstname' defaultValue={payload?.firstName} onChange={(e)=>setFname(e.target.value)}/>
                      <input type='text' className={Cssprofile.input} placeholder='Lastname'  defaultValue={payload?.lastName}  onChange={(e)=>setLname(e.target.value)}/>
                      <input type='text'className={Cssprofile.input } placeholder='Email'  defaultValue={payload?.email}  onChange={(e)=>setEmail(e.target.value)}/>
                      
                    </div>  
                  </div>
                  
              </Box>
             
              
          </Modal>
          
    </div>
  );
}
