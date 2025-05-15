
import react , {useId} from "react"
// import '../index.css';
function Cui({
  label,
  amount,
  onAmountChange, 
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false
}){
  const amountInput=useId()
  return (
    <div className={`bg-white p-3 flex text-sm `}>
       <div className="w-1/2">
         <label htmlFor={amountInput} className="text-black/40 mb-2 inline-block">
           {label}
         </label>
         <input
         id={amountInput}
         className="outline-none bg-transparent w-full p-1.2"
         type="number"
         placeholder="amount"
         value={amount}
         disbaled={amountDisable}
         onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
         />
      
    </div>
     <div className="w-1/2 flex flex-wrap justify-end text-right">
      <p className="text-black/40 mb-2 w-full">Currency type</p>
      <select className="rounded-lg px-1 py-1 outline-none bg-gray-300 cursor-pointer"
      value={selectCurrency}
      onChange={(e)=>onCurrencyChange && onCurrencyChange()}> 
     {currencyOptions.map((Currency)=>(
      <option key="Currency" value={Currency}>
        {Currency}
      </option>))}
      </select>
    </div>
    </div>
    )
}
export default Cui