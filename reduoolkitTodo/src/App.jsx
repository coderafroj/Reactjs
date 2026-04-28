import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])


  return (
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
