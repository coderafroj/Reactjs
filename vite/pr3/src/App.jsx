import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {
 

  return (
    <>
    <h1 class="bg-red-600 p-6 rounded-md border-3 black">coderafroj</h1>
    <Card username="Afroj" btn="go profile" title="web dev" c="bg-blue-400"/>
    <Card username="arjun" btn="contact" title="bandar" c="bg-red-300"/>
     <Card c="bg-green-700"/>
  
    
    </>
  )
}

export default App
