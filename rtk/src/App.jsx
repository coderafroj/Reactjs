import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const todos = useSelector(state => state.todos)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  })

  return (
    <div>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
