import { useState,useCallback,useEffect,useRef} from 'react'


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
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }
    
    setPassword(pass)
    
  } ,[length,charAllow,numAllow,setPassword])
  const pr=useRef(null)
  const copyClipBoard=useCallback(()=>{
    pr.current.select()
   
    window.navigator.clipboard.writeText(password)
  })
  useEffect(()=>{
    passwordGenerator()
  },[passwordGenerator,length,numAllow,charAllow])

  return (
  <div className="w-full bg-gray-400 max-w-md mx-auto px-5 py-7 rounded-3xl">
    <h1 className="text-center">Password Generator</h1>
    <div className="flex justify-around rounded-3xl gap-.5 bg-sky-300">
      <input type="text"
      value={password}
      placeholder="password"
      className="bg-white rounded-lg"
      readOnly
      ref={pr}
      />
       <button onClick={copyClipBoard} className="rounded-lg bg-yellow-300 px-2 py-1 focus:bg-blue-400" >copy</button>
    </div>
    <div className="flex py-3 gap-1 flex-wrap">
      <input type="range"
      min={6}
      max={100}
      value={length}
      onChange={(e)=>setLength(e.target.value)}
      />
      <label className="text-sm">length:{length}</label>
      <input
      type="checkbox" 
      onChange={()=>{
        setNumAllow(prev=>!prev)
      }}
      />
       <label className="text-sm">number</label>
       <input
      type="checkbox" 
      onChange={()=>{
        setCharAllow(prev=>!prev)
      }}
      />
        <label className="text-sm">char</label>
    </div>
   
  </div>
  )
}

export default App
