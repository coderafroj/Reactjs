import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './context/components/Login'
import Profile from './context/components/Profile'

function App() {
  

  return (
    
     <UserContextProvider>
      <Login/>
      <Profile/>
     </UserContextProvider>
  )
}

export default App
