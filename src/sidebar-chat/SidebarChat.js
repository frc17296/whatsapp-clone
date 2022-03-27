import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material';
import "./SidebarChat.css"
import {Link} from 'react-router-dom'

function SidebarChat({addNewChat, name, id}) {

  const [seed, setSeed] = useState('')
  
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {
    
  }

  return !addNewChat ? (   
    <Link to={`/chats/${id}`}>
      <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='sidebarChat__info'>
          <h2>{name}</h2>
          <p>Last message ...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className='sidebarChat' onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat