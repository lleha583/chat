import { useEffect, useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'
import Chat from './components/chat'
import ChatNav from './components/ChatNav'

function App() {

  const [messages, setMessages] = useState([])

  const socket = io('http://localhost:3000')


  useEffect(() => {

    socket.on('message', (message) => {
      console.log(message);
      console.log(messages);
      setMessages((prev) => { return [...prev, message] })
    })

  }, [])

  setInterval(() => {
    console.log(messages);
  }, 3000)

  const sendMessage = (message: string) => {
    socket.emit('message', message)
  }

  return (
    <>
      <h1>app</h1>
      <div>
        <Chat messages={messages} />
        <ChatNav sendMessage={sendMessage} />
      </div>
    </>
  )
}
export default App
