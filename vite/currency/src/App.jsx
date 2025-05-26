import { useState } from 'react'
import Exchange from "./Exchange"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className="text-red-400">coderafroj</h1>
   <Exchange/>
    </>
  )
}

export default App
