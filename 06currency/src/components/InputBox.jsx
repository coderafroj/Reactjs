export default function InputBox(
    {
        label,
        amount,
        onCurrencyChange,
        onAmountChange,
        selectCurrency,
        currencyOptions
    }
){
    return(
        <div className="w-full flex ">
        <div className="w-1/2">
        <label htmlFor="" className="inline-block">{label}</label>
        <input type="text" name="" id="" placeholder="amount" className="w-full" 
        value={amount}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
        
        />
        </div>
        <div className="w-1/2">
            <p>currency type</p>
            <select name="" id="" value={selectCurrency}
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