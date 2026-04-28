import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../feature/todo/todoSlice"

function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")


    }
    return (
        <form onSubmit={addTodoHandler} className="w-full p-4 flex justify-center gap-4">
            <input className=" w-96 bg-gray-400 outline-none px-3 py-2 rounded-lg" type="text" placeholder="enter todo.." value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="bg-blue-300 px-2 py-1 rounded-lg" type="submit">submit</button>
        </form>
    )
}
export default AddTodo