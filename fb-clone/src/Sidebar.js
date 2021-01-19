import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
        <div className='sidebar'>
        <SidebarRow src='https://scontent.ffjr1-2.fna.fbcdn.net/v/t1.0-9/52047628_2064911377141850_3925252065869168640_o.jpg?_nc_cat=109&ccb=2&_nc_sid=e3f864&_nc_ohc=NPf5oXD9BFEAX9YMF2J&_nc_ht=scontent.ffjr1-2.fna&oh=b7b0a0bf752472471ba30561579072dd&oe=60255EDF'
         title="VennyKeller"></SidebarRow>

        <SidebarRow Icon={LocalHospitalIcon}
         title="COVID-19 Information Center">
         </SidebarRow>
         <SidebarRow Icon ={EmojiFlagsIcon} title="Pages"></SidebarRow>
        <SidebarRow Icon ={PeopleIcon} title="Friends"></SidebarRow>
        <SidebarRow Icon ={ChatIcon} title="Messenger"></SidebarRow>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"></SidebarRow>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"></SidebarRow>
        <SidebarRow Icon={ExpandMore} title="Marketplace"></SidebarRow>  
        </div>
    )
}

export default Sidebar
