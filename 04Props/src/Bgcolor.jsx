import { useState } from "react"

function Bgcolor(){
    const [color,setColor]=useState("red")
    return(
        <div className="w-full h-screen  " style={{backgroundColor:color}}>
            hey m sel coderafjor 

        </div>
    )
}
export default Bgcolor