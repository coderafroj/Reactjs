import {useState,useEffect} from "react"
export default function(){
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://api.github.com/users/coderafroj").then(res=>res.json()).then(res=>setData(res))
  },[])
  return(
    <div>
    <div className="flex justify-center p-3 ">
      <img src={data.avatar_url} className="w-16 h-16 rounded-full"/>
      
      </div>
      <p>Name : {data.name}</p>
       <p>Followers : {data.followers}</p>
      
    </div>
    )
}