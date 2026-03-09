import { useContext, useState } from "react"
import userContext from "../context/userContext"

export default function Login(){
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const {setUser}=useContext(userContext)
    const btn=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <div>
            <h2>Login   </h2>
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} /><br /><br />
            <input type="" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br /><br />
            <button onClick={btn}>login</button>
        </div>
    )
}