import React from 'react'
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Post.css'
import { useStateValue } from './StateProvider';

function Post({profilePic ,image,username,timestamp,message}) {
    const [{user} ,dispatch]=useStateValue();
    return (
        <div className="post">
        <div className="post__top">
        <Avatar src={user.photoURL} className="post__avatar">
        </Avatar>
        <div className="post__topInfo">
        <h3>{user.displayName}</h3>
        <p>Timestamp...</p>
        </div>
        
        </div>
        <div className="post__bottom">
        <p>{message}</p>

        </div>
        <div className="post__image">
        <img src={image} alt=""></img>
        </div>
        <div className="post__options">
        <div className="post__option">
        <ThumbUpIcon> </ThumbUpIcon>
        <p>Likes</p>
       
     </div>
     <div className="post__option">
     <ChatBubbleOutlineIcon> </ChatBubbleOutlineIcon>
     <p>Comment</p>
     </div>
     <div className="post__option">
     <NearMeIcon></NearMeIcon>
     <p>Share</p>
     </div>
     <div className="post__option">
     <AccountCircleIcon></AccountCircleIcon>
     <ExpandMoreIcon></ExpandMoreIcon>
     </div>
        </div>
            
        </div>
    )
}

export default Post
