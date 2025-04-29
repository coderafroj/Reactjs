import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {
 

  return (
    <>
    <h1 class="bg-red-600 p-6 rounded-md border-3 black">coderafroj</h1>
    <Card username="Afroj" btn="go profile"/>
    <Card username="arjun" btn="contact"/>
    <Card/>
    </>
  )
}

export default App
