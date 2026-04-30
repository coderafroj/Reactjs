import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || []
}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                msg: action.payload
            }
            state.todos.push(todo)
            console.log(state.todos.map(t => t.id));
            console.log(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        }

    }
})
export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer