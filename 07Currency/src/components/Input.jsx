import UseCurrency from '../Hooks/UseCurrency'

function Input(){
    let data=UseCurrency('inr')
    console.log(data);
    
    return(
        <div className="bg-white p-3 rounded-lg text-sm flex">
            <div className="w-1/2 flex justify-start flex-wrap">
                <label className="inline-block text-black/40 mb-2" htmlFor="t">from</label>
                <input type="text"placeholder="currency" className="w-full bg-transparent outline-none border-none" />
            </div>
            <div className="w-1/2 flex-wrap flex justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency type</p>
                <select className="bg-gray-100 rounded-lg px-1 py-1 outline-none " name="" id="">
                    <option value="usd">usd</option>
                </select>
            </div>
        </div>
    )
}
export default Input