import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='w-full flex flex-wrap justify-center h-screen bg-no-repeat bg-cover items-center' style={{backgroundImage:`url(https://plus.unsplash.com/premium_photo-1682310075673-b408eb1ca6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D)`}}>
  <div className='w-full'>
    <div className='w-full max-w-md mx-auto backdrop-blur-sm rounded-lg  border border-gray-100
     bg-white/40'>
      <form action="">
        <div className='w-full mb-4'>
          <Input label='from'/>
        </div>
        <div className='relative w-full'>
          <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-lg px-2 py-0.5'>swap</button>
        </div>
        <div className='w-full'>
          <Input label='to'/>
        </div>
        <button className='bg-blue-600 rounded-lg px-2 py-0.5 mb-3 mt-3 '>COnvert</button>
      </form>
    </div>
  </div>

</div>
  )
}

export default App
