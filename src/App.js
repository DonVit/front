import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';

import config from './config'

const useMessges = () => {
  const [messages, setMessages] = useState([])
  const getMessages = async () => {
    const msgs = await fetch(`${config.BASE_URL}/entries`).then(res => {
      if(!res.ok) {
        return res.text().then(text => { throw new Error(text) })
       }
      else {
       return res.json();
     }    
    }).catch(e=>console.error('fail to fetch', e))
    setMessages(msgs)
  }

  const addMessage = async (name, message) => {
    const result = await fetch(`${config.BASE_URL}/entry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, message})
    }).then(r=>r.json()).catch(e=>console.error('fail to post', e))
    getMessages()
    return result;

  }

  useEffect(()=>{
    getMessages()
  },[])
  return [messages, addMessage]
}

const MessageForm = ({addMessage}) => {
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  
  return (
    <>
    <input name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
    <input name="note" value={note} onChange={(e)=>setNote(e.target.value)}></input>
    <button onClick={()=>addMessage(name, note)}>add message</button>
    </>
  )
}

const Message = ({id, name, message}) => <div key={id} id={id}><b>{`${id}: ${name}`}</b><p>{message}</p></div>

const Messages = ({messages}) => messages && 
    <>
      {
        messages.map((m, i) => <Message id ={i} name={m.name} message = {m.message} />)
      }
    </>

const App = () => {
  const [messages, addMessage] = useMessges([])
  return (
    <div className="App">
      <MessageForm addMessage={addMessage}/>
      <Messages messages={messages}/>
    </div>
)}

export default App;
