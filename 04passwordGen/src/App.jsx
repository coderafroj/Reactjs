import { useState } from 'react'


function App() {
  const [password,setPassword]=useState("");
  let str="abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  let pass="";
  const gen=()=>{
  for(let i=1;i<=8;i++){
    let index=Math.floor(Math.random()*str.length)
    pass+=str[index];

    
  }
  setPassword(pass);
}


  return (
    <div><h2>Pass gen</h2>
    <div>
      <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      <br />
      <button onClick={gen}>genrate</button>
    </div>
    </div>
  )
}

export default App
