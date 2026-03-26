import { useEffect, useState } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemBtn'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [theme,setTheme]=useState("dark")
  const darkTheme=()=>{
    setTheme("dark")
  }
  const lightTheme=()=>{
    setTheme("light")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(theme)
  },[theme])

  return(
    
  <ThemeProvider value={{darkTheme,lightTheme,theme}}>
    <div className='h-screen p-5 w-full dark:bg-black'>
    <div className='absolute right-[41%] top-5 b-6'><ThemeBtn/></div>
    <div className='mt-8 grid place-content-center'><Card/></div>
  </div>
  </ThemeProvider>

  )
}

export default App
