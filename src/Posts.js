import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material'

function Posts({username,caption,imgUrl}) {
  return (
    <div className="post">
        <div className='post_header'>
            <Avatar
                className="post_avatar" 
                alt='Michael'
                src="/static/images/avatar/1.jpg"
            />
              <h3>{username}</h3>
        </div>
          
    {/* header->avatar +username */}

    
    {/* Image */}
          <img class = "post_image" src={imgUrl}></img>

          <h4 className='post_text '>
          <strong>{username} </strong> {caption}</h4>
    {/* Michael + Hey Witsies!!! */}

    </div>
  )
}

export default Posts