import { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

export default function Currency(){
    const [amount,setAmount]=useState(0)
    const [from,setFrom]=useState('usd')
    const [to,setTo]=useState('inr')
    const [convertedAmount,setConvertedAmount]=useState(0)
     const currecnyData=useCurrencyInfo(from)
     const options=Object.keys(currecnyData)
     const swap=()=>{
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
     }
     const convert=()=>{
        setConvertedAmount(amount*currecnyData[to])
     }
    return(
        <div className="flex justify-center items-center h-screen bg-no-repeat w-full bg-cover  brightness-75
        " style={{backgroundImage:`url(https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8)`}}>
            <div className="w-full max-w-md flex justify-center items-center bg-white/30 backdrop-blur-2xl rounded-2xl px-6 py-3 border border-gray-500" >
                <form 
                onSubmit={(e)=>{
                    e.preventDefault()
                    convert()
                }}>
                    <div className="w-full mb-2 text-center"><InputBox
                    label='from'
                    
                    amount={amount}
                    selectCurrency={from}
                    currencyOptions={options}
                    onCurrencyChange={(Currency)=>setFrom(Currency)}
                    onAmountChange={(amount)=>setAmount(amount)}
                    
                    /></div>

                    <div  className="relative h-0.5"><button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" type="button" onClick={swap}>swap</button></div>
                    <div className="w-full mb-2 mt-2 "><InputBox
                    label='to'
                    selectCurrency={to}
                    onCurrencyChange={(Currency)=>setTo(Currency)}
                    currencyOptions={options}
                    amount={convertedAmount}
                    

                    amountDisable
                    
                    
                    /></div>
                    <div className="text-center"><button type='submit' className="bg-blue-400 px-2 py-1 rounded-lg">convert</button> </div>
                </form>
            </div>
        </div>
    )
}