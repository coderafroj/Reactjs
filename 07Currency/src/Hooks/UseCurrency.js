import { useEffect,useState } from "react"

function useCurrency(currency){
    const [data,setData]=useState([])
    let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(res=>setData(res[currency])).catch((err)=>console.log("fuck this error "+err)
        )

    },[currency])
    return data
    // console.log(data);
    
}
export default useCurrency