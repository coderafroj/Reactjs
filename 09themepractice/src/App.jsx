import { useEffect, useState } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemBtn'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [themeMode,setThemeMode]=useState('light')
  const darkTheme=()=>{
    setThemeMode('dark')

  }
  const lightTheme=()=>{
    setThemeMode('light')
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  })
  return(
    
  <ThemeProvider value={{darkTheme,lightTheme,themeMode}}>
    <div className='h-screen p-5 w-full'>
    <div className='absolute right-[41%] top-5 b-6'><ThemeBtn/></div>
    <div className='mt-8 grid place-content-center'><Card/></div>
  </div>
  </ThemeProvider>

  )
}

export default App
