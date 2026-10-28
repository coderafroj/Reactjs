import { useState } from "react"

function Counter(){
    let [Counter,setCounter]=useState(0)
    let add=()=>{
        setCounter(Counter=Counter+1)
    }
    let remove=()=>{
        setCounter(Counter=Counter-1)
    }
    return(
        <div>
            <h2>Counter: {Counter}</h2><br />
            <button onClick={add}>Add value</button><br />
            <button onClick={remove}>Remove value</button>

        </div>
    )
}
export default Counter