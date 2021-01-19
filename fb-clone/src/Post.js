import React from 'react'
import { Avatar } from '@material-ui/core';
import './Post.css'

function Post({profilePic ,image,username,timestamp,message}) {
    return (
        <div className="post">
        <div className="post__top">
        <Avatar src={profilePic} className="post__avatar">
        </Avatar>
        <div className="post__topInfo">
        <h3>{username}</h3>
        <p>Timestamp...</p>
        </div>
        
        </div>
        <div className="post__bottom">
        <p>{message}</p>

        </div>
        <div className="post__image">
        <img src={image} alt=""></img>
        </div>
            
        </div>
    )
}

export default Post
