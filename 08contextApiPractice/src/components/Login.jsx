import { useContext, useState } from "react"
import userContext from "../context/userContext"

export default function Login(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const {setUser}=useContext(userContext)
    const btn=()=>{
        setUser({password,username})

    }
    return(
        <div>
            <h2>login</h2>
            <input type="text " placeholder="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            /><br />
            <input type="text" placeholder="pasword"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            /><br />
            <button onClick={btn}>send</button>
        </div>
    )
}