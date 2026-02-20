import { useCallback, useEffect, useRef, useState } from "react"

function Password(){
    const [length,setLenght]=useState(8)
    const [num,setNum]=useState(false)
    const [char,setChar]=useState(false)
    const [password,setPassword]=useState('')
    const passGen=useCallback(()=>{
        let pass=''
        let str="abcdefghijklmnopqrstuvxzwyABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(num)str+='0123456789'
        if(char)str+="[]{})(&*(^%$#@?<>"
        for(let i=1;i<=length;i++){
            let character=Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(character)
        }
        setPassword(pass)
    },[num,char,length])
    useEffect(()=>{
        passGen()
    },[num,char,length])
    const passRef=useRef(null)
    const copyBtn=()=>{
        passRef.current.select(password)
        window.navigator.clipboard.writeText(password)
    }
    return(
        <div className='w-full flex justify-center rounded-3xl py-6 px-3 shadow-2xs items-center'>
            <div className='max-w-md bg-red-400 py-6 px-6 rounded-4xl'>
        <h2 className='capitalize mb-3'>password generator</h2>
        <div className='mx-w-md w-full'>
          <input type="text" className='bg-white rounded-l-lg px-2 py-1 w-[80%] outline-none ' readOnly ref={passRef} value={password}/>
          <button onClick={copyBtn} className='rounded-r-lg bg-blue-800 px-2 py-1 cursor-pointer'>copy</button>
        </div>
        <div className='flex justify-center items-center gap-9 mt-2'>
          <div><input type="range" className='mr-2'
          
          min={6}
          max={100}
         value={length}
         onChange={(e)=>setLenght(e.target.value)}
          />
          <label htmlFor="">len:{length}</label>
          </div>
          <div><input type="checkbox" onChange={()=>setChar(prev=>!prev)}  />
          <label htmlFor="">char</label>
          </div>
          <div><input type="checkbox" onChange={()=>setNum(prev=>!prev) } />
          <label htmlFor="">num</label>
          </div>
        </div>
      </div>

        </div>
    )
}
export default Password