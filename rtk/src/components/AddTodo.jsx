import { useDispatch } from "react-redux"
import { addTodo } from "../feature/todoSlice"
import { useState } from "react"

export default function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const btn = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")

    }

    return (
        <form onSubmit={btn} className="flex justify-center mt-6">
            <input className="w-96 mx-w-xl bg-gray-300 p-2 rounded-l-lg " type="text" placeholder="write toodo..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="rounded-r-lg p-2 bg-blue-800 text-white"> Add</button>
        </form>
    )
}