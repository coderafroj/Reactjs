import { useState } from "react"
import { useTodo } from "../context/TodoContext"

export default function TodoForm(){
    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo()
    const add=(e)=>{
        e.preventDefault()
        if(!todo)return
        addTodo({todo:todo,complete:false})
        setTodo('')
    }
    return(
        
            <form className="flex" onSubmit={add}>
                <input type="text" placeholder="write todo..." className="outline-none border-none w-full max-w-100 p-2 px-9 rounded-l-lg bg-gray-500"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)
                    
                }
                />
                <button type="submit" className="cursor-pointer rounded-r-lg bg-blue-500 px-3 py-2">Add</button>
            </form>
       
    )

}