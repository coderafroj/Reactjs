import Input from './Input'
import useCurrency from '../Hooks/UseCurrency'
import bg from '../image.jpg'
import { useState } from 'react'
function Currency(){
    const [amount,setAmount]=useState("")
    const [convertedAmount,setConvrtedAmount]=useState("")
    const [to,setTo]=useState('inr')
    const [from,setFrom]=useState('usd')
   let currencyInfo=useCurrency(from)
   let options=Object.keys(currencyInfo)
   const convert=()=>{
    setConvrtedAmount(amount*currencyInfo[to])
   }
   const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvrtedAmount(amount)

   }
    
    
    return(
        <div style={{backgroundImage:`url('${bg}')`}} className='w-full h-screen bg-center bg-cover flex justify-center items-center flex-wrap'>
            <h2 className='bg-red-500'>h</h2>
            <div className='w-full'>
                <div className='w-full max-w-md mx-auto bg-white/30 px-4 py-5 rounded-2xl border backdrop-blur-xs border-gray-60'>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        convert()
                    }}>
                    <div className='mb-1'>
                        <Input 
                        
                        lable='from'
                         amount={amount}
                         amountChange={(c)=>setAmount(c)}

                         currencyOptions={options}
                         selectCurrency={from}
                         currencyChange={(c)=>setFrom(c)}

                         />
                    
                    </div>
                    <div className='relative w-full h-0.5'>
                        <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-blue-500 px-1.5 rounded-lg py-2' onClick={swap}>Swap</button>
                    </div>
                    <div>
                        <Input
                         lable='To'
                          amount={convertedAmount}
                          currencyOptions={options}
                          selectCurrency={to}
                          currencyChange={(c)=>setTo(c)}
                        
                          
                          />
                    </div>
                    <button type='submit' className='w-full bg-blue-400 rounded-lg mt-3 py-1 text-white uppercase '>convert</button>
                </form> 
                </div>
            </div>
        </div>
    )
}
export default Currency