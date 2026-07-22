import { useState } from "react";

export const Counter=()=>{
    // let counter=0;
    //create state for react
    let [counter,setCounter]=useState(0);

    const add=()=>{
        
        console.log(counter);//update to to console not reflact ui 
        // setCounter(counter+1)
        //         setCounter(counter+1)

        setCounter(counter=>counter+1) //update preve value 
        setCounter(counter=>counter+1)
        
    }
    const remove=()=>{
        setCounter(counter+1)
        // setCounter(counter=>counter-1)//update preve value 
    }
    return(
        <div>
            <p>Counter app</p>
            <p>{counter}</p>
            <button onClick={add}>Add</button>
            <br />
            <button onClick={remove}>Remove</button>
        </div>
    )
}