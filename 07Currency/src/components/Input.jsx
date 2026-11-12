import useCurrency from "../Hooks/UseCurrency"


function Input({
    lable,
    amount,
    selectCurrency='coder',
    amountChange,
    currencyChange,
    currencyOptions,

}){
    

    
    
    return(
        <div className="bg-white p-3 rounded-lg text-sm flex">
            <div className="w-1/2 flex justify-start flex-wrap">
                <label className="inline-block text-black/40 mb-2" htmlFor="t">{lable}</label>
                <input type="text"placeholder="currency" className="w-full bg-transparent outline-none border-none"
                value={amount}
                onChange={(e)=>amountChange && amountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex-wrap flex justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency type</p>
                <select onChange={(e)=>currencyChange && currencyChange(e.target.value)} value={selectCurrency} className="bg-gray-100 rounded-lg px-1 py-1 outline-none " name="" id="">
                    
                        {currencyOptions.map((cur)=>(
                            <option value={cur} key={cur}>{cur}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
export default Input