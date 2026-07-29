import { useState } from 'react'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='  bg-linear-to-r from-pink-500 to-sky-300 via-orange-300'>
    <div className='grid grid-cols-1 lg:grid-cols-3  gap-y-12 justify-items-center'>
    <Card username="coderafroj" btn="visit now"/>
    <Card username="rahul" btn="contact now"/>
    <Card username="firoj" btn="visit now"/>
    <Card username="sohil" btn="visit now"/>
    <Card username="saziya" btn="visit now"/>
    <Card username="muneesh" btn="visit now"/>
    <Card username="amaan" btn="visit now"/>
    </div>
    </div>
  )
}

export default App
