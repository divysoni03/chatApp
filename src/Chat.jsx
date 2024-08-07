import React from 'react'
import { auth } from './firebase/firebaseconfig'

function Chat({name,text,uid}) {


  return (
    <div className={auth.currentUser.uid == uid ? 'txtright':'txtleft'}>
        <p>{name}</p>
        <p className={auth.currentUser.uid == uid ? 'chatright':'chatleft'}>{text}</p>
    </div>
  )
}

export default Chat