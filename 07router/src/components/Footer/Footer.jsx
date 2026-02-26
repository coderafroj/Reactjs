import { NavLink } from "react-router-dom"
export default function Footer(){
    return(
        <div className="w-full bg-black text-white border-t-2 backdrop-blur-3xl bottom-0 fixed p-3">
            <div className="w-full flex justify-center items-center  ">
                <ul className="flex gap-24 md:gap-48 "><li><NavLink to="/" className={({isActive})=>(
                                    `font-mono ${isActive ? "text-orange-700": "text-gray-400"}`
                                )}>Home</NavLink></li>
                <li><NavLink to="/about" className={({isActive})=>(
                                    `font-mono ${isActive ? "text-orange-700": "text-gray-400"}`
                                )}>about</NavLink></li>
                <li><NavLink to='/github' className={({isActive})=>(
                                    `font-mono ${isActive ? "text-orange-700": "text-gray-400"}`
                                )}>Github</NavLink></li>
                </ul>
                
            </div>
        </div>
    )
}