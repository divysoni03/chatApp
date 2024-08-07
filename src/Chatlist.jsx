import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import { addDoc, collection, limit, onSnapshot, query, serverTimestamp } from 'firebase/firestore'
import { auth, db } from './firebase/firebaseconfig'
import { orderBy } from 'firebase/firestore/lite'
function Chatlist() {
    let colref = collection(db, "messages")
    let [text, setText] = useState()
    let [messages, setMessages] = useState([])

    async function addchat() {
        await addDoc(colref, {
            text: text,
            name: auth.currentUser.displayName,
            uid: auth.currentUser.uid,
            createdAt: serverTimestamp()
        })

        setText("")
    }


    let q = query(colref, orderBy("createdAt"), limit(50))

    useEffect(() => {
       
        onSnapshot(q, function (snapShot) {
            let result = []
            snapShot.docs.forEach(function (doc) {
                result.push({ id: doc.id, ...doc.data() })
            })
            setMessages(result)
        })
        
    }, [])


    return (
        <div className='chatlist'>
            <header>
                <i class="fa-solid fa-comment-dots"></i> CHATAPP
            </header>

            <section className='chatbody'>
                {messages && messages.map((msg) => <Chat uid={msg.uid} key={msg.id} name={msg.name} text={msg.text}/>)}

            </section>

            <footer>
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Write a message' type="text" />
                <button onClick={addchat}><i class="fa-solid fa-paper-plane"></i></button>
            </footer>
        </div>
    )
}

export default Chatlist