import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("HomePage Loaded")
  },[])

  return (
  <>
  <h1>Golu Page</h1>
  </>
  )
}

export default App
