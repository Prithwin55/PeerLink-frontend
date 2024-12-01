import React, { useEffect } from 'react'
import CssSidebar from './Sidebar.module.css'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import testImage from '../../assets/pexels-pixabay-531880.jpg'
import { Css } from '@mui/icons-material';
import { getProfileAction } from '../../redux/auth/auth.action';
import { useDispatch, useSelector } from 'react-redux';
function SideBar() {
    const nav = useNavigate()
    const dispatch = useDispatch()
    
    const { loading, payload, error } = useSelector((state) => state.auth);
    
    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        dispatch(getProfileAction(jwt))
    },[])

    const menu = [
        {
        title: "Home",
        icon: <CottageOutlinedIcon />,
        click:()=>nav("posts")
        },
        {
            title: "Reels",
            icon: <SlowMotionVideoIcon />,
            click:()=>nav("/")
        },
        {
            title: "Create Reels",
            icon: <AddCircleOutlineIcon />,
            click:()=>nav("/")
        },
        {
            title: "Notifications",
            icon: <ChatBubbleOutlineOutlinedIcon />,
            click:()=>nav("/")
        },
        {
            title: "Messages",
            icon: <MapsUgcOutlinedIcon />,
            click:()=>nav("/")
        },
        {
            title: "Lists",
            icon: <FormatListBulletedIcon />,
            click:()=>nav("/")
        },
        {
            title: "Communities",
            icon: <Diversity1Icon />,
            click:()=>nav("/")
        },
        {
            title: "Profile",
            icon: <Person4OutlinedIcon />,
            click:()=>nav("profile")
        },
        
    ]
    return (  
            <div className={CssSidebar.container}>
                 <div className={CssSidebar.heading}>
                     <svg className={CssSidebar.king} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 6.417c0-1.013.822-1.833 1.834-1.833 1.215 0 2.104 1.167 1.763 2.329-.559 1.915 5.827 3.731 6.771-1.471.239-1.323-.021-1.67-.668-2.321-.329-.329-.534-.783-.534-1.287 0-1.013.822-1.834 1.834-1.834 1.014 0 1.833.821 1.833 1.833 0 .504-.204.958-.533 1.287-.646.65-.905.998-.666 2.321.941 5.2 7.33 3.387 6.77 1.471-.339-1.162.548-2.329 1.764-2.329 1.012 0 1.832.821 1.832 1.834 0 1.118-.992 1.97-2.084 1.816-1.32-.187-3.03 4.554-3.417 6.716-1.765-.615-3.618-.942-5.493-.949-1.875.006-3.74.334-5.504.949-.388-2.162-2.098-6.903-3.418-6.717-1.092.155-2.084-.697-2.084-1.815zm-1 14.583h2.359l.566 3c.613-1.012 1.388-1.912 2.277-2.68l-2.342-3.335c-1.089.879-2.053 1.848-2.86 3.015zm24 0h-2.359l-.566 3c-.613-1.012-1.388-1.912-2.277-2.68l2.343-3.335c1.088.879 2.052 1.848 2.859 3.015zm-12-4.998c-2.845.009-5.491.825-7.757 2.211l2.334 3.322c1.603-.924 3.448-1.464 5.423-1.473 1.975.009 3.82.549 5.423 1.473l2.334-3.322c-2.266-1.386-4.912-2.202-7.757-2.211zm-3.022 3.498l-.65-.348-.651.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.13.725zm3.672-.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.129.725zm3.718.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.322-.663.322.663.729.101-.53.511.128.726z"/></svg>
                    <h1 className={CssSidebar.head}>PeerLink</h1>
                </div>
                <div className={CssSidebar.column}>
                {
                    menu.map((item) => {
                        return <div className={CssSidebar.item} onClick={item.click}>
                                {item.icon}
                                <p className={CssSidebar.text}> {item.title}</p>
                                
                            </div>
                    })
                }
                </div>
            <div className={CssSidebar.lowerBar}>
                <div className={CssSidebar.avtar}>
                    <img className={CssSidebar.image } src={testImage} alt="imgno"></img>
                </div>
                <div className={CssSidebar.nameDiv}>
                    <h1 className={CssSidebar.name}>{payload?.firstName+" "+payload?.lastName }</h1> {/*name*/}
                </div>
            </div>
        </div>
    )
}

export default SideBar