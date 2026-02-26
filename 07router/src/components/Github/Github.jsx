import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

export default function Github(){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch('https://api.github.com/users/coderafroj').then((res)=>res.json()).then((res)=>setData(res))
    },[])
    console.log(data);
    
    return(
        <div className="bg-black w-full h-screen text-white">
            <div className="max-w-md mx-auto grid place-content-center h-screen">
                <div>
                    <div className="w-48 h-48"><img className="w-full h-full rounded-full object-cover" src={data.avatar_url} alt="" /></div>
                    <div className="text-center mt-1 bg-sky-700 rounded-lg contain-fit" ><Link to={data.html_url}>Visit Github</Link></div>

                    <div className="mt-3 text-left">
                        <h2 className="uppercase  tracking-wider">Name: {data.name}</h2>
                        <h3 className="tracking-wider">Location: {data.location}</h3>
                        <h3 className="tracking-wider">Github followers : {data.followers}</h3>
                        <h3 className="tracking-wider"> Github repo : {data.public_repos}</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}