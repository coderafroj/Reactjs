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
##prev Kahan Se Aaya?
Ye React Ka Internal System Hai:

Jab bhi tum setCounter(prev => prev + 1) likhte ho

React khud prev ki value provide karta hai

prev = counter ki sabse latest value
## Ye ek callback function hai

React isko call karta hai aur current value prev mein daal deta hai
#prev vs Direct Value
Tumhara Tarika (Problem):
```h
setCounter(counter + 1) // Har baar original counter (20) use hota hai

```

##sahi treeka
```s  
setCounter(prev => prev + 1) // Har baar latest value use hoti hai
```

# Real-World Example - Bank Ka Khata
Get App
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

Ye samjha yo ye add wale function Mein Mein char baar setcounter likha rakha hai ab bata ye kaise chalega ok add value karne per ek sath kitni add hongi ok depth Mein samjha
Understanding Multiple setCounter Calls in React
In your code, you have multiple setCounter calls in the addValue function:

javascript
const addValue = () => {
  setCounter(counter + 1)
  setCounter(counter + 1)
  setCounter(counter + 1)
  setCounter(counter + 1)
}
How React Handles State Updates
Batching of State Updates: React batches state updates that occur within the same event handler. This means all four setCounter calls will be processed together before React re-renders the component.

Stale Closure Problem: All four calls are using the same initial value of counter because:

The counter value is captured in the closure when the function runs

React doesn't update the value until after the event handler completes

Final Result: Even though you call setCounter four times, each call is essentially doing counter + 1 where counter is the same initial value (e.g., 20). So you'll only see an increase of 1, not 4.

What You're Actually Seeing
If counter starts at 20:

Clicking "Add Value" will only increase it to 21, not 24 as you might expect

Each subsequent click will again only increase by 1

How to Actually Increment Multiple Times
If you want to increment by 4, you have two options:

Option 1: Use the functional update form
javascript
const addValue = () => {
  setCounter(prev => prev + 1)
  setCounter(prev => prev + 1)
  setCounter(prev => prev + 1)
  setCounter(prev => prev + 1)
}
Option 2: Single update with the full calculation
javascript
const addValue = () => {
  setCounter(counter + 4)
}
Key Takeaways
React state updates are asynchronous and batched

Multiple calls to update the same state in one event handler don't stack unless you use the functional form

The functional form (setCounter(prev => prev + 1)) ensures you're working with the latest state

The functional form is particularly useful when you need to make multiple updates based on the previous state in sequence.

Hinglish Mein samajh kuch samajh nahi aya ok or ye tune prev laga kar jo kiya bo bhi depth samjha
React setCounter ka Asli Kaam - Hinglish Mein Samjho
Tumhare code mein addValue function mein 4 baar setCounter use kiya hai:

javascript
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
Simple Bhasha Mein Samajhte Hain
React Ka Batch Processing:

Jab tum ek button click karte ho, aur usme multiple setCounter calls hote hain

React sabko ek saath process karta hai, alag-alag nahi

Isliye re-render ek hi baar hota hai

Problem Kya Hai?:

Har baar counter + 1 kar rahe ho, lekin counter ki value same hi rehti hai

Jaise:

Pehla setCounter: 20 (current) + 1 = 21

Dusra setCounter: 20 (same current) + 1 = 21

Teesra setCounter: 20 (same current) + 1 = 21

Chautha setCounter: 20 (same current) + 1 = 21

Final value: 21 (not 24)

Kyun?:

JavaScript closure ki wajah se har baar counter ki original value (20) use hoti hai

React state update async hota hai, isliye real-time update nahi hota

Solution - prev Use Karne Ka Fayda
javascript
setCounter(prev => prev + 1)
setCounter(prev => prev + 1)
setCounter(prev => prev + 1)
setCounter(prev => prev + 1)
Ye Kaise Kaam Karta Hai?
prev Ka Matlab:

prev = previous state ki latest value

React internally isko track karta hai

Step-by-Step Working:

Pehla setCounter: prev = 20 → 20 + 1 = 21

Dusra setCounter: prev = 21 → 21 + 1 = 22

Teesra setCounter: prev = 22 → 22 + 1 = 23

Chautha setCounter: prev = 23 → 23 + 1 = 24

Final value: 24

Real-life Example Se Samjho
Example 1 (Tumhara Code - Galat Tarika):

Jaise tum ek bartan mein 1-1 litre pani 4 baar daal rahe ho

Lekin har baar tum same level se measure kar rahe ho

Final result: 1 litre hi hoga

Example 2 (Correct Tarika - prev use karke):

Pehla glass: 1 litre daala (total 1)

Dusra glass: previous total (1) + 1 = 2

Teesra glass: previous total (2) + 1 = 3

Chautha glass: previous total (3) + 1 = 4

Final result: 4 litre

Best Practices
Jab bhi previous state pe depend kare:

Always use prev => prev + 1 wala syntax

Ek hi baar mein update karna ho:

javascript
setCounter(counter + 4) // seedha 4 se increment
Multiple operations ke liye:

javascript
setCounter(prev => {
  const newValue = prev + 1
  // kuch aur calculations
  return newValue + 3 // final update
})
Samajh aaya? Agar aur koi doubt ho to puchna! 😊

Prev=> aisa ye aya kaha se equal greater tha. Laga rahe ho or last wale Mein to Poora function hi bana doya
prev => Ka Magic - Poori Baat Samjhte Hain! 😊
prev Kahan Se Aaya?
Ye React Ka Internal System Hai:

Jab bhi tum setCounter(prev => prev + 1) likhte ho

React khud prev ki value provide karta hai

prev = counter ki sabse latest value

Example Ke Sath Samjho:

javascript
setCounter(prev => prev + 1)
Ye ek callback function hai

React isko call karta hai aur current value prev mein daal deta hai

prev vs Direct Value
Tumhara Tarika (Problem):

javascript
setCounter(counter + 1) // Har baar original counter (20) use hota hai
Sahee Tarika (Solution):

javascript
setCounter(prev => prev + 1) // Har baar latest value use hoti hai
Poora Function Kyun Banaya?
Last example mein maine ye dikhaya:

javascript
setCounter(prev => {
  const newValue = prev + 1
  // kuch aur calculations
  return newValue + 3
})
Iska Matlab:

prev mein current counter value aayegi

Hum usme +1 karenge (newValue)

Fir usme +3 karenge

Final result return karenge

Real-World Example - Bank Ka Khata
Galat Tarika (Tumhara Code):

Jaise bank mein 4 baar ₹1 deposit karne jao

Har baar passbook mein ₹0 dikhaye

Final balance: ₹1 (kyunki har baar starting balance use ki)

Sahee Tarika (prev use karke):

Pehla deposit: ₹0 + ₹1 = ₹1

Dusra deposit: ₹1 + ₹1 = ₹2

Teesra deposit: ₹2 + ₹1 = ₹3

Chautha deposit: ₹3 + ₹1 = ₹4

Final balance: ₹4