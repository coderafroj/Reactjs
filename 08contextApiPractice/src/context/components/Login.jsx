import { useContext, useState } from "react"
import userContext from "../userContext"

export default function Login(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const {setUser}=useContext(userContext)
    const btn=()=>{
        setUser({username,password})
    }
    return(
        <div style={{backgroundColor:"skyblue",padding:"6px",borderRadius:"10px"}}>
            <h2>Login</h2>
            <input style={{backgroundColor:"white",border:"none",padding:"4px",borderRadius:"5px"}} type="text" placeholder="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            
            /><br />
            <input style={{backgroundColor:"white",border:"none",padding:"4px",borderRadius:"5px"}} type="password" name="" id="" placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <br /><br />
            <button onClick={btn}>send</button>

        </div>
    )
}