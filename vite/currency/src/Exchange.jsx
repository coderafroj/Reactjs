import useInfo from "./useInfo"
function Exchange(){
  const cp=useInfo("usd")
  const option=Object.keys(cp)
  const item=Object.entries(cp)
  console.log(item)
  console.log(item)
    
  return(
   <div className="text-center">
     <ul>
       {option.map((cur)=>(
       <li key={cur}>{cur}</li>
       ))}
     </ul>
     <select>
       {option.map((cur)=>(
       <option>{cur}</option>
       ))}
     </select>
     <ul>
       {item.map((key,value)=>(
        <li>{key}:{value}</li>
       ))}
      
     </ul>
   </div>
    )
}
export default Exchange