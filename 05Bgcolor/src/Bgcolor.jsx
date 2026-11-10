import { useState } from "react"

function Bgcolor(){
    const [color,setColor]=useState("red")
   
    return(
        <div className="w-full h-screen  " style={{backgroundColor:color}}>
            <div className="flex justify-center items-center h-screen">
                <h2 className={`font-sans font-bold font-stretch-50% text-2xl tracking-wider ${color=='pink'?"text-black":"text-white"}`}>{color}</h2>
            </div>
            <div className="w-full flex flex-wrap justify-center  fixed bottom-10 inset-x-0 px-3 py-5 ">
                <div className="bg-white shadow-2xl flex gap-4 flex-wrap justify-center px-5 rounded-2xl py-2">
                    <button onClick={()=>setColor('red')} className="text-white shadow-2xl font-bold outline-none  px-2 py-0.6 rounded-lg" style={{backgroundColor:'red'}}>red</button>
                    <button onClick={()=>setColor('green')} className="text-white  font-bold outline-none  px-2 py-0.6 rounded-lg" style={{backgroundColor:'green'}}>green</button>
                    <button onClick={()=>setColor('indigo')} className="text-white  font-bold outline-none  px-2 py-0.6 rounded-lg" style={{backgroundColor:'indigo'}}>indigo</button>
                    <button onClick={()=>setColor('pink')} className="text-white  font-bold outline-none  px-2 py-0.6 rounded-lg" style={{backgroundColor:'pink'}}>pink</button>
                    <button onClick={()=>setColor('olive')} className="text-white  font-bold outline-none  px-2 py-0.6 rounded-lg" style={{backgroundColor:'olive'}}>olive</button>
                    <button onClick={()=>setColor('blue')} className="text-white  font-bold outline-none  px-2 py-0.6 rounded-lg" style={{backgroundColor:'blue'}}>blue</button>
                    <button onClick={()=>setColor('gray')} className="text-white  font-bold outline-none  px-2 py-0.6 rounded-lg" style={{backgroundColor:'gray'}}>gray</button>
                    <button onClick={()=>setColor('black')} className="text-white  font-bold outline-none  px-2 py-0.6 rounded-lg" style={{backgroundColor:'black'}}>black</button>

                </div>
                
            </div>

        </div>
    )
}
export default Bgcolor