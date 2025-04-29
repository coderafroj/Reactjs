import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=15
  let [counter,setCounter]=useState(20)
  const addValue=()=>{
    
    console.log("hello",counter)
    setCounter(counter+1)
    setCounter(counter+1)
     setCounter(counter+1)
      setCounter(counter+1)
  }
  const removeValue=()=>{
  //  counter=counter-1
   // setCounter(counter-1)
   if(counter>0){
     setCounter(counter-1)
   }
  }

  return (
    <>
    <h1>coderafroj</h1>
    <h2>Counter:{counter}</h2>
    <button onClick={addValue}>Add Value</button><br/>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
