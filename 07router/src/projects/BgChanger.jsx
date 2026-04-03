import { useState } from "react"

export default function BgChanger(){
    const [color,setColor]=useState("orange");
    return(
        <div style={{backgroundColor:color}} className="w-full h-screen">
           <div className="flex flex-wrap justify-center fixed inset-x-0 bottom-1/2">
             <div className=" bg-white shadow-2xl rounded-lg flex flex-wrap px-3 py-2.5  ">
                <div className="rounded-lg px-2.5 py-0.5 bg-red-600"><button>red</button></div>

            </div>
           </div>

        </div>

    )
}