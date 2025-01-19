import { useEffect, useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'
import Chat from './components/chat'
import ChatNav from './components/ChatNav'
import Form from './components/Form'
const socket = io('http://localhost:3000')

function App() {

  const [user, setUser] = useState<string | null>(localStorage.getItem('user'))

  
  const sendMessage = (input: string) => {
    socket.emit('message', {name: user , message: input})
  }
  
  //connect to socket
  useEffect(() => {
    socket.on('connect', () => socket.emit('message', `${user} connected`))

    return () => {
      socket.off('message', () => socket.emit('message', `${user} connected`))
    }
  }, [])

  if(user === null) return (
    <div>
      <Form setUser={setUser} />
    </div>
  )


  return (
    <>
      <h3>chat</h3>
      <div>
        <Chat socket={socket} user={user} />
        <ChatNav sendMessage={sendMessage} />
      </div>
    </>
  )
}
export default App


