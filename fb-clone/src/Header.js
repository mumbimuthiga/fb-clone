import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutLinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import "./Header.css";

function Header() {
    return (
        <div className="header">
        <div className="header__left">
        <img src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png"
         alt="Logo"/>
         <div className="header__input">
         <SearchIcon></SearchIcon>
         <input type="text" placeholder="Search Facebook"></input>
         </div>
        </div>
        <div className="header__middle">
        <div className="header__option--active">
        <HomeIcon fontSize="large"></HomeIcon>
        </div>
        <div className="header__options">
        <FlagIcon fontSize="large"></FlagIcon>
        </div>
        <div className="header__options">
        <SubscriptionsOutLinedIcon fontSize="large"></SubscriptionsOutLinedIcon>
        </div>
        <div className="header__options">
        <StorefrontIcon fontSize="large"></StorefrontIcon>
        </div>
        <div className="header__options">
        <SupervisedUserCircle fontSize="large"></SupervisedUserCircle>
        </div>
        
        </div>
        <div className="header__right">
        <div className="header__info">
        <Avatar alt="Remy Sharp" src="" />
        <h4>VennyKeller</h4>
        </div>
        <IconButton>
        <AddIcon></AddIcon>
        </IconButton>
        <IconButton>
        <ForumIcon></ForumIcon>
        </IconButton>
        <IconButton>
        <NotificationsActiveIcon></NotificationsActiveIcon>
        </IconButton>
        <IconButton>
        <ExpandMoreIcon></ExpandMoreIcon>
        </IconButton>
        </div>
          
        </div>
    )
}

export default Header
