import { useEffect, useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'
import Chat from './components/chat'
import ChatNav from './components/ChatNav'
import Form from './components/Form'
const socket = io('http://localhost:3000')

function App() {

  const [user, setUser] = useState<string | null>(null)
  
  const [input, setInput] = useState('')
  
  const sendMessage = () => {
    socket.emit('message', input)
    setInput('')
    
  }
  

  //connect to socket
  useEffect(() => {
    socket.on('connect', () => socket.emit('message', `${user || socket.id} connected`))

    return () => {
      socket.off('message')
    }
  }, [])


  //check user

  useEffect(() => {
    setUser(localStorage.getItem('user'))

  }, [user])



  if(!user) return (
    <div>
      <Form setUser={setUser} />
    </div>
  )


  return (
    <>
      <h3>chat</h3>
      <div>
        <Chat socket={socket} />
        <ChatNav>
          <input type="text" placeholder="text" value={input} onChange={(e) => {setInput(e.target.value)}} />
          <button onClick={sendMessage} >send</button>
        </ChatNav>
      </div>
    </>
  )
}
export default App
