import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function ThemeBtn(){
    const {darkTheme,lightTheme,themeMode}=useContext(ThemeContext)
    const [move,setMove]=useState(false)
    const btnChange=()=>{
        if(themeMode==='light'){
            darkTheme()
        }
        else{
            lightTheme()
        }
    }

    return(
        <div onClick={()=>setMove(prev=>!prev)} className="w-full flex justify-center items-center ">
            <div className="w-14 h-7 bg-red-300 rounded-2xl shadow-2xl">   
                <button onClick={btnChange} className={`w-7 h-7 rounded-full bg-red-500 transition duration-300 ${move ?"translate-x-7":""}`}></button>
            </div>
        </div>
    )
}