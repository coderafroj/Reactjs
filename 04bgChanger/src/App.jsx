import { useState } from "react"


function App() {
 const [color,setColor]=useState('navy')

  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-4 bg-white shadow-lg rounded-3xl p-2">
          <button onClick={()=>setColor('red')} className="ouline-none text-white bg-red-600 px-4 rounded-lg py-1">red</button>
          <button onClick={()=>setColor('green')} className="ouline-none text-white bg-green-600 px-4 rounded-lg py-1">green</button>
          <button onClick={()=>setColor('blue')} className="ouline-none text-white bg-blue-600 px-4 rounded-lg py-1">blue</button>
          <button onClick={()=>setColor('orange')} className="ouline-none text-white bg-orange-600 px-4 rounded-lg py-1">orange</button>
          <button onClick={()=>setColor('yellow')} className="ouline-none text-white bg-yellow-600 px-4 rounded-lg py-1">yellow</button>
          <button onClick={()=>setColor('grey')} className="ouline-none text-white bg-gray-600 px-4 rounded-lg py-1">grey</button>
          
        </div>
      </div>
    </div>
    
  )
}

export default App
