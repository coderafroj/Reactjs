import { useCallback, useEffect, useState,useRef } from "react"

function PasswordGen(){
    const [length,setLenght]=useState(8)
    const [numAllow,setNumAllow]=useState(false)
    const [charAllow,setCharAllow]=useState(false)
    const [password,setPassword]=useState("f")

    const PasswordGenerator=useCallback(()=>{
        let pass=''
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numAllow)str+="1234567890"
        if(charAllow)str+="[]{})(!@#$%^&*~`><?"
        for(let i=0;i<length;i++){
            let index=Math.floor((Math.random())*str.length+1)
            pass+=str.charAt(index)

        }
        setPassword(pass)
        console.log(pass);
        

    },[length,numAllow,charAllow])    
    useEffect(()=>{
        PasswordGenerator()
    },[length,numAllow,charAllow])

    const copyPass=useCallback(()=>{
        passref.current?.select()
        // passref.current?.setSelectionRange(1,5)//1 se 5 index tk select
        // window.navigator.clipboard.writeText(password)
    },[password])
    // const c=()=>{
    //     window.navigator.clipboard.writeText(password)
    // }

    //useref
    const passref=useRef(null)
    return(
        <div className="grid place-content-center  h-screen ">

                <h2 className="uppercase text-center">Password genrator</h2>
            <div className=" w-72 h-48 px-2 py-2 mt-2  bg-gray-300/30 rounded-lg">
                <div className="flex items-center justify-center py-3">
                    <input ref={passref} type="text" placeholder="password" className="bg-white/20 px-2 rounded-l-lg border-none outline-none mx-w-2xl"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                <button onClick={copyPass} className="rounded-r-lg bg-blue-600 px-1 py-0.7 cursor-pointer">copy</button>
                </div>
                <div className="flex justify-center items-center gap-10 mt-3">
                    <div className="flex  flex-col-reverse gap-0 items-center"><label htmlFor="h" className="text-xs cursor-pointer">lenght-{length}</label>
                    <input type="range" name="" id="h" className="w-16" value={length} min={6} max={100} onChange={(e)=>setLenght(e.target.value)} /></div>
                    <div className="flex flex-col-reverse gap-0">
                        <label className="text-xs cursor-pointer" htmlFor="num">num</label>
                        <input type="checkbox"id='num'
                        defaultChecked={numAllow}
                        onChange={(e)=>setNumAllow(prev=>!prev)}
                        />
                    </div>

                    <div className="flex flex-col-reverse gap-0 items-center"> 
                        <label htmlFor="char" className="text-xs cursor-pointer">char  </label>
                        <input type="checkbox" id='char'
                        defaultChecked={charAllow}
                        onChange={(e)=>setCharAllow(prev=>!prev)}
                        />
                    </div>
                </div>
                
            

            </div>
        </div>
    )
}
export default PasswordGen