import React from "react"
function Card({username="Coderafroj",btn="visit"}){
  //console.log(props.channel)
  return(
    <div className="bg-sky-300 p-5 mb-5 mt-4 rounded-lg">
      <h1 className="text-black-300">{username}</h1>
      <h3>web dev</h3>
      <button className="mt-4">{btn}</button>
    </div>
    )
}
export default Card