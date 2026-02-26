import { NavLink } from "react-router-dom"
export default function Footer(){
    return(
        <div className="w-full bg-black text-white border-t-2 backdrop-blur-3xl bottom-0 fixed p-3">
            <div className="w-full flex justify-center items-center  ">
                <ul className="flex gap-32 md:gap-48 "><li><NavLink>Home</NavLink></li>
                <li><NavLink>about</NavLink></li>
                <li><NavLink>contact</NavLink></li>
                </ul>
                
            </div>
        </div>
    )
}