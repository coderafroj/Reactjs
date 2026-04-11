import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoProvider } from "./context/TodoContext"

function App(){
    const [todos,setTodos]=useState([])
    const addTodo=(todo)=>{
        setTodos(prev=>[{id:Date.now(),...todo},...prev])
    }
    const updateTodo=(id,todo)=>{
        setTodos(prev=>prev.map(prevTodo=>prevTodo.id==id?todo:prevTodo))
    }
    const deleteTodo=(id)=>{
        setTodos(prev=>prev.filter(todo=>todo.id!==id))
    }
    const toggleComplete=(id)=>{
        setTodos(prev=>prev.map(todo=>todo.id==id?{...todo,complete:!todo.complete}:todo))
    }
    useEffect(()=>{
        const todos=JSON.parse(localStorage.getItem("todos"))
        if(todos &&todos.length>0){
            setTodos(todos)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    return(
        
        <TodoProvider value={{addTodo,deleteTodo,toggleComplete,updateTodo,todos
        }}>
            <div className="grid place-content-center mt-6  
            ">
                <div className="w-full  flex justify-center"><TodoForm/></div>
                {todos.map(todo=>(
                    <div key={todo.id}><TodoItem todo={todo}/></div>
                ))}
            </div>
        </TodoProvider>
    )
}
export default App