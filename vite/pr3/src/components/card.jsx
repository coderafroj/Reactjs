import React from 'react'
import { Bell, Share2, ThumbsUp } from 'lucide-react'
function Card({userName="Afu",
  pro="hacker",
  img,
  btn="visit",
  cls
}){
  return(
    <div className={`grid place-content-center bg-sky-500/30 p-3 rounded-3xl shadow-gray-500 ${cls}`}>
      <div className="w-full flex justify-center">
        <img src={img} className="rounded-full object-cover w-16 h-16 border-2 border-transparent hover:border-4 hover:border-blue-600"/>
      </div>
      <div>
        <h3 className="font-extrabold">
          {userName}
        </h3>
        <p className="text-white text-sm">{pro}</p>
      </div>
    <div className="flex justify-center gap-2 mt-3">
        <div className="flex justify-center items-center gap-1 hover:scale-110">
        <Bell className="w-4 h-4 "/>
        <span className="text-sm">13</span>
      </div>
       <div className="flex justify-center items-center gap-1">
        <Share2 className="w-4 h-4"/>
          <span className="text-sm">50</span>
      </div>
       <div className="flex justify-center items-center gap-1">
        <ThumbsUp className="w-4 h-4"/>
          <span className="text-sm">1k+</span>
      </div>
    </div>
    <div className="w-full text-sm p-0 mt-3">
      <button className="w-24 h-10">{btn}</button>
    </div>
    </div>
    )
}
export default Card