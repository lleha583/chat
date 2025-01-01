import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    const setUser = async () => {
      const res = await fetch('http://localhost:3000/user', { method: "GET" })
      const response = await res.json()
      await console.log(response);
    } 
    setUser()
  }, [])

  return (
    <>
    qeertrwqewqrrgrtrrtyvrtwergerrr
    </>
  )
}

export default App
