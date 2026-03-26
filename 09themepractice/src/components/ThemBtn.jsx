import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"


export default function ThemeBtn(){
    const [move,setMove]=useState(false)
    const {darkTheme,lightTheme,theme}=useContext(ThemeContext)
    const btnChange=()=>{
    if(theme==='dark'){
      lightTheme()
    }
    else{
        
          darkTheme()
    }
}
   

    return(
        <div onClick={()=>setMove(prev=>!prev)} className="w-full flex justify-center items-center ">
            <div className="w-14 h-7 bg-red-300 dark:bg-green-900 rounded-2xl shadow-2xl">   
                <button onClick={btnChange} className={`w-7 h-7 rounded-full bg-red-500 dark:bg-black transition duration-300 ${move ?"translate-x-7":""}`}></button>
            </div>
        </div>
    )
}