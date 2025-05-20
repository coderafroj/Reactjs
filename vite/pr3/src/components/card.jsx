import React from "react"
function Card({username="Coderafroj",btn="visit",title,c}){
  //console.log(props.channel)
  return(
    <div className={` p-5 mb-5 mt-4 rounded-lg ${c}`}>
      <h1 className="text-black-300">{username}</h1>
      <h3>{title}</h3>
      <button className="mt-4">{btn}</button>
    </div>
    )
}
export default Card