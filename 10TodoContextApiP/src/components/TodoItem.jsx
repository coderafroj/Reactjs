import { useState } from "react"
import { useTodo } from "../context/TodoContext"
export default function TodoItem({todo}){
    const {updateTodo,deleteTodo,toggleComplete}=useTodo()
    const [todoMsg,setTodoMsg]=useState(todo.todo)
    const [editableTodo,setEditableTodo]=useState(false)
    const edit=()=>{
    updateTodo(todo.id,{...todo,todo:todoMsg})
    setEditableTodo(false)
    }
    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }

    return(
        <div className="mt-4" >
            <div className={`flex justify-around  px-2 py-1 rounded-lg ${todo.complete?"bg-green-700":"bg-red-600"}`} >
                <input type="checkbox" checked={todo.complete} onChange={toggleCompleted}/>
                <input type="text" placeholder="todo list" className={`outline-none px-2 py-1 ${todo.complete?"line-through":""}`} value={todoMsg} onChange={(e)=>setTodoMsg(e.target.value)} readOnly={!editableTodo} />
                <button onClick={()=>{
                    //jab koi tick krdega tb bo edit nhi kr payega
                    if(todo.complete)return
                    if(editableTodo){
                        edit()
                         }else{
                            //agar pahle false hogi to use tru banan pdega taki edi tkr paye
                            setEditableTodo(prev=>!prev)
                         }
                }}>{editableTodo?"save":"edit"}</button>
                <button className="cursor-pointer" onClick={()=>deleteTodo(todo.id)}>dlt</button>
            </div>
        </div>
    )
}