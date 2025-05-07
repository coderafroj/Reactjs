import { useState,useCallback,useEffect} from 'react'


function App() {
  const [length,setLength]=useState(8)
  const [charAllow,setCharAllow]=useState(false)
  const [numAllow,setNumAllow]=useState(false)
  const [password,setPassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    let pass=""
    if(numAllow)str+="0123456789" 
    if(charAllow)str+="@#₹&/*:;!€¥$¢√π÷×¶∆|}{"
    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    
    setPassword(pass)
    
  } ,[length,charAllow,numAllow,setPassword])
  useEffect(()=>{
    passwordGenerator()
  },[passwordGenerator,length,numAllow,charAllow])

  return (
  <div className="w-full bg-gray-400 max-w-md mx-auto px-5 py-7 rounded-3xl">
    <h1>Password Generator</h1>
    <div className="flex  rounded-3xl gap-1">
      <input type="text"
      value={password}
      placeholder="password"
      className="bg-sky-500 rounded-lg"
      readonly/>
       <button className="rounded-lg bg-yellow-300 px-2 py-1" >copy</button>
    </div>
    <div className="flex py-3 gap-1 flex-wrap">
      <input type="range"
      min={6}
      max={100}
      value={length}
      onChange={(e)=>setLength(e.target.value)}
      />
      <label>length:{length}</label>
      <input
      type="checkbox" 
      onChange={()=>{
        setNumAllow(prev=>!prev)
      }}
      />
       <label>number</label>
       <input
      type="checkbox" 
      onChange={()=>{
        setCharAllow(prev=>!prev)
      }}
      />
        <label>chareacter</label>
    </div>
   
  </div>
  )
}

export default App
