export default function InputBox(
    {
        label,
        amount,
        onCurrencyChange,
        onAmountChange,
        selectCurrency,
        currencyOptions=[]
    }
){
    return(
        <div className="w-full flex rounded-lg px-2  text-center " >
            <div className="w-1/2">
                <label htmlFor="" className="inline-block">{label}</label>
                <input readOnly type="text " placeholder="amount" className="w-full" value={amount} onChange={(e)=>onAmountChange && onAmountChange(e.target.value)} />
            </div>
            <div className="w-1/2">
                <p>currency type</p>
                <select name="" id="" value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
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