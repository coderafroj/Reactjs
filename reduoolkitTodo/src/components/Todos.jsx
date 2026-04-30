import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'
export default function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <div className=' max-w-xl mx-auto mt-3 space-y-3'>
            <h2 className='text-center text-2xl font-bold my-2'>your tasks</h2>

            {
                todos.map((todo) => (
                    <li key={todo.id} className='flex rounded-lg justify-between space-y-3 bg-sky-200 p-2 items-center '>
                        {todo.msg}
                        <button className='bg-red-600 shadow-lg rounded-lg px-2 py-1' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </li>

                ))
            }
        </div>

    )
}