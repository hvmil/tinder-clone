import React from 'react'
import "react-chat-elements/dist/main.css";
import { ChatList, ChatItem } from "react-chat-elements";
import { IconButton } from "@mui/material/IconButton";
import { Link, Route, Routes } from "react-router-dom";

function Chats() {
  return (
    <>
    
    <ChatItem
  avatar="https://i.imgur.com/V9r5DKG_d.jpg?maxwidth=520&shape=thumb&fidelity=high"
  alt="kursat_avatar"
  title="Anas"
  subtitle="u up?😏"
  date={new Date()}
  unread={1}
/>
<ChatItem
  avatar="https://i.imgur.com/RMCAAJ2.jpg"
  alt="kursat_avatar"
  title="Rahul"
  subtitle="im w watevah🤪😏"
  date={new Date()}
  unread={2}
/>
<ChatItem
  avatar="https://i.imgur.com/3F2KRHl.jpg"
  alt="kursat_avatar"
  title="Nick"
  subtitle="ajay's cock is ready for sucking😩"
  date={new Date()}
  unread={5}
/>
    
    

    </>
    

  )
}


export default Chats