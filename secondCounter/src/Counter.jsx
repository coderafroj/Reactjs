import { useState } from "react";

// function Counter(){
//     let x=0
//     function add(){
//         x++;
//         console.log(x);
        
//     }
//     return(
//         <div><h2>counter app</h2>
//         <button onClick={add}>Count {x}</button>
//         </div>
//     )
// }
// above function not update ui then always use hoooks for update ui 
function Counter(){
    //state each variable and react update state and ui reflect
    let [counter,setCounter]=useState(0) //0 is initial value ,counter=0
    let [message,setMessage]=useState('')
    // add number
    function add(){
        setCounter(counter+1);
        setMessage('')
         console.log('click',counter);
    }
    // remove number
    function remove(){
        if(counter>0){
     setCounter(counter-1)
        setMessage('')
        }
        else{
            setMessage("sorry bete")
        }
        
        console.log('click',counter);
        
    }
    
    return(
        <div>
            <h1>counter app</h1>
            <p>{counter}</p>
            <p>{message}</p>
            <button onClick={add}>Add {counter} </button><br /><br />
            <button onClick={remove}>Remove {counter}</button>
        </div>
    )
}
export default Counter