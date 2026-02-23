
import {useEffect,useState} from 'react'
export default function useCurrencyInfo(currency){
  const [data,setData]=useState({})
	useEffect(()=>{
		fetch(``).then((res)=>res.json()).then((res)=>setData(res[currency]))
	})
	return data
}
