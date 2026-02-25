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
        <div className="w-full flex ">
        <div className="w-1/2">
        <label htmlFor={uniqId} className="inline-block">{label}</label>
        <input type="text" name="" id={uniqId} placeholder="amount" className="w-full" 
        value={amount}
        disabled={amountDisable}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
        
        />
        </div>
        <div className="w-1/2">
            <p>currency type</p>
            <select name="" id="" disabled={currencyDisable} value={selectCurrency}
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