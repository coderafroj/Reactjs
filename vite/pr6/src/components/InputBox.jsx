import '../index.css';
function InputBox(){
  return(
    <div className="w-full h-screen grid place-content-center bg-cover" style={{backgroundImage:`url("https://i.postimg.cc/YSV4bcpN/hero.png")`}}>
      <h1 className="text-4xl text-white text-center p-4">coderafroj</h1>
      <div className="bg-white/30 w-[600px] h-[400px] rounded-lg shadow-2xl flex justify-center flex-col items-center gap-5">
        <div className="bg-white w-[90%] h-[30%] rounded-3xl">
          <div className="flex justify-between px-4 py-2 text-gray-400 w-full">
            <a>From</a>
             <a>Currency</a>
            
          </div>
          <div className="flex justify-between px-4 py-2 text-gray-600 w-full mt-6 ">
            <input type="number" value="0" className="outline-none focus:border-transparent"/>
             <select className="outline-none bg-transparent"> 
             <option>usd</option>
             </select>
            
          </div>
        </div>
        <div className="bg-white w-[90%] h-[30%] rounded-3xl">
           <div className="flex justify-between px-4 py-2 text-gray-400 w-full">
            <a>To</a>
             <a>Currency</a>
            
          </div>
          <div className="flex justify-between px-4 py-2 text-gray-600 w-full mt-6 ">
            <input type="number" value="0" className="outline-none focus:border-transparent"/>
             <select className="outline-none bg-transparent"> 
             <option>inr</option>
             </select>
            
          </div>
        </div>
         <div className="bg-blue-300 w-[90%] h-[20%] rounded-3xl flex items-center">
           <button className="w-full h-full font-bold text-2xl text-blue-900">Convert USD to INR</button>
         </div>
        
      </div>
      
      
      
    </div>
    )
}
export default InputBox