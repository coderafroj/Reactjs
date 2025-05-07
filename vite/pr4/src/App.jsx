import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
     <div className="fixed bottom-[50%] flex justify-center inset-x-0 bg-red-600 rounded-5 flex-wrap gap-6 p-1">

        
          <div className="flex justify-center bg-white rounded-full px-1">  <button onClick={()=>setColor("black")} className="bg-black rounded-full px-4 text-white">black</button></div>
            <div className="flex justify-center bg-white rounded-full p-1">  <button onClick={()=>setColor("grey")} className="bg-gray-400 rounded-full px-4">grey</button></div>
            
                <div className="flex justify-center bg-white rounded-full p-1">    <button onClick={()=>setColor("pink")} className="bg-pink-400 rounded-full px-4">pink</button></div>
                  <div className="flex justify-center bg-white rounded-full p-1">   <button onClick={()=>setColor("green")} className="bg-green-400 rounded-full px-4">green</button></div>
                    <div className="flex justify-center bg-white rounded-full p-1">  <button onClick={()=>setColor("blue")} className="bg-blue-400 rounded-full px-4">blue</button></div>
                      <div className="flex justify-center bg-white rounded-full p-1">   <button onClick={()=>setColor("yellow")} className="bg-yellow-400 rounded-full px-4">yellow</button></div>
                        <div className="flex justify-center bg-white rounded-full p-1">  <button onClick={()=>setColor("blue")} className="bg-blue-400 rounded-full px-4">blue</button></div>
     </div>
   </div>
  )
}

export default App
