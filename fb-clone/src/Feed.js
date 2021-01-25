import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import image2 from './images/image2.jpg'
import { useStateValue } from './StateProvider';

function Feed() {
    const [{user} ,dispatch]=useStateValue();

    
    return (
        <div className='feed'>
            {/*StoryReel*/}
             <StoryReel></StoryReel>
            {/*MessageSender*/}
            <MessageSender></MessageSender>
            {/*Post*/}
            <Post
            profilePic= {user.photoURL}
            message="Wow this works"
            username={user.displayName}
            image='https://scontent.ffjr1-2.fna.fbcdn.net/v/t1.0-9/52047628_2064911377141850_3925252065869168640_o.jpg?_nc_cat=109&ccb=2&_nc_sid=e3f864&_nc_ohc=NPf5oXD9BFEAX9YMF2J&_nc_ht=scontent.ffjr1-2.fna&oh=b7b0a0bf752472471ba30561579072dd&oe=60255EDF'
            ></Post>
            <Post></Post>
            <Post></Post>


        </div>
    )
}

export default Feed
