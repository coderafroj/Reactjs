#props--reusable component
###hamne ek card banaya jismein data likha hai kuch ham cha rahe hai ye ek hi baar banan pade or ham use baar baar use kar ske uski value change karke

##card.jsx
```jsx
import React from "react"
function Card({username="Coderafroj",btn="visit"}){
  //console.log(props.channel)
  return(
    <div className="bg-sky-300 p-5 mb-5 mt-4 rounded-lg">
      <h1 className="text-black-300">{username}</h1>
      <h3>web dev</h3>
      <button className="mt-4">{btn}</button>
    </div>
    )
}
export default Card
```
###uper ek card hai jiske functionmein hamne props diya hai jo neeche app.jsx hai ismwin ham jab componnet render karte hai to jo value dete hai bahi props hoti hai bo card.jsx mein ati hai phir ham d structurw karke use karte hai agar render karte bakt koi prop nahi ayega do unki by default value set hai
##App.jsx
```jsx
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

```

