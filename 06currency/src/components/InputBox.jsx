import { useId } from "react"

export default function InputBox(
    {
        label,
        amount,
        onCurrencyChange,
        onAmountChange,
        selectCurrency,
        currencyOptions,
        amountDisable,
        currencyDisable
    }
){
    const uniqId=useId()
    return(
        <div className="w-full flex bg-white px-6 py-2 rounded-lg ">
        <div className="w-1/2">
        <label htmlFor={uniqId} className="inline-block text-black/40">{label}</label>
        <input type="text" name="" id={uniqId} placeholder="amount" className="w-full outline-none bg-transparent" 
        value={amount}
        disabled={amountDisable}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
        
        />
        </div>
        <div className="w-1/2 text-right flex flex-wrap justify-center">
            <p>currency type</p>
            <select className="rounded-lg bg-gray-300" name="" id="" disabled={currencyDisable} value={selectCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
                {
                    currencyOptions.map((c)=>(
                        <option value={c} key={c}>{c}</option>
                    ))
                }
            </select>
        </div>
        
        </div>
    )
}