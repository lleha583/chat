import { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router'

function App() {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (user === null) {
      navigate('/login')
    }
  }, [])


  return (
    <>
      <h1>app</h1>
    </>
  )
}
export default App
