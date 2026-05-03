import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../feature/todoSlice"
export default function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    return (
        <div className="max-w-96 mx-auto mt-7">
            <ul className="space-y-3">
                {
                    todos.map(todo => (
                        <li key={todo.id} className=" flex justify-between bg-red-400 px-3 py-2 rounded-lg">{todo.msg}
                            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                        </li>


                    ))
                }
            </ul>


        </div>
    )
}