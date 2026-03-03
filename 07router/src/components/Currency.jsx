import { useState } from "react";
import InputBox from "./inputBox";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";

export default function Currency(){
    const [amount,setAmount]=useState(0)
    const [convertedAmount,setConvertedAmount]=useState()
    const [from,setFrom]=useState('usd')
    const [to,setTo]=useState('inr')
    const currencyData=useCurrencyInfo(from)
    const option=Object.keys(currencyData)
    const swap=()=>{
        setFrom(to)
        setTo(from)
        setAmount(convertedAmount)
        setConvertedAmount(amount)
    }
    const convert=()=>{
        setConvertedAmount(amount*currencyData[to])
    }
    return(
        <div className="w-full flex justify-center items-center h-screen bg-no-repeat bg-cover" style={{backgroundImage:"url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VycmVuY3l8ZW58MHx8MHx8fDA%3D')"}}>
            <div className="">
                <div className="bg-white/30 backdrop-blur-2xl px-6 py-6 flex justify-center w-full rounded-2xl" >
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        convert()
                    }}>
                        <div className="mb-3 px-2 bg-gray-200 rounded-lg">
                            <InputBox  label='from'
                            selectCurrency={from}
                            currencyOptions={option}
                            onAmountChange={(amount)=>setAmount(amount)}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            amount={amount}
                            />
                        </div>
                        <div className="text-center"><button type="button" onClick={swap}>swap</button></div>
                        <div className="mb-3 px-2 bg-gray-200 rounded-lg" >
                              <InputBox
                              label='to'
                              selectCurrency={to}
                              onAmountChange={(amount)=>setAmount(amount)}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              currencyOptions={option}
                              amount={convertedAmount}
                              />
                        </div>
                        <div className="text-center"><button className="bg-blue-700 px-2 py-1 rounded-lg"  type="submit">convert</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}