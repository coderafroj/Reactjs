import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn"

import Card from './components/Card'

function App(){
    const [themeMode,setThemeMode]=useState("dark")
    const darkTheme=()=>{
        setThemeMode("dark")

    }
    const lightTheme=()=>{
        setThemeMode("light")

    }
    useEffect(()=>{
        document.querySelector('html').classList.remove("dark",'light')
        document.querySelector('html').classList.add(themeMode)
    },[themeMode])
    return(
        <ThemeProvider value={{darkTheme,lightTheme,themeMode}}>
            <div>
                <div><ThemeBtn/></div>
            <div>
                <Card/>
            </div>
            </div>

        </ThemeProvider>
    )
}
export default App