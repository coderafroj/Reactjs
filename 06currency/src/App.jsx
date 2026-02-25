import { useState } from 'react'
import './App.css'
import Input from './components'
import useCurrecyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount]=useState(0)
  const [to,setTo]=useState('inr')
  const [from,setFrom]=useState('usd')
  const [convertedAmount,setConvertedAmount]=useState()
 
  const currencyInfo=useCurrecyInfo(from)
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)

    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
   const convert=()=>{
     setConvertedAmount(amount*currencyInfo[to])
   }



  return (
<div className='w-full flex flex-wrap justify-center h-screen bg-no-repeat bg-cover items-center' style={{backgroundImage:`url(https://plus.unsplash.com/premium_photo-1682310075673-b408eb1ca6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D)`}}>
  <div className='w-full'>
    <div className='w-full max-w-md mx-auto backdrop-blur-sm rounded-lg  border border-gray-100
     bg-white/40'>
      <form 
      onSubmit={(e)=>{
        e.preventDefault()
        convert()
      }}
      >
        <div className='w-full mb-4'>
          <Input label='from' 
          currencyOption={options} 
          amount={amount} 
          onAmountChange={(amount)=>setAmount(amount)}
          selectCurrecy={from}
          onCurrencyChange={(currency)=>setAmount(currency)}
          />
        </div>
        <div className='relative w-full'>
          <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-lg px-2 py-0.5' onClick={swap}>swap</button>
        </div>
        <div className='w-full'>
          <Input label='to'  
          amount={convertedAmount} 
          currencyOption={options} 
          onCurrencyChange={(currency)=>setTo(currency)} 
          selectCurrecy={to}/>
        </div>
        <button type="submit" className='bg-blue-600 rounded-lg px-2 py-0.5 mb-3 mt-3 ' onClick={convert}>Convert {from.toUpperCase()}to {to.toLowerCase()}</button>
      </form>
    </div>
  </div>

</div>
  )
}

export default App
