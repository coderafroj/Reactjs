import { useState } from "react"

function Counter(){
    let [Counter,setCounter]=useState(0)
    let add=()=>{
        //this type of update variable every function update deafult value line 1 counter+2==0 se 2 okay then next line counter+1=1- 0 se 1 third counter+3=0+3=3 then total outp r click is counter 3
        // setCounter(Counter+2)
        // setCounter(Counter+1)
        // setCounter(Counter+3)
        // setCounter(Counter=>Counter+1)
        // setCounter(Counter=>Counter+1)
    }
    let remove=()=>{
        setCounter(Counter=Counter-1)
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