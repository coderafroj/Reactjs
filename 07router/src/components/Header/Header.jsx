import { NavLink,Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
export default function Header(){
    return(
        <div className="w-full px-3 py-2 bg-black text-white border-b-2 shadow-2xl 
        ">
            <div className='flex md:justify-around justify-evenly gap-34 items-center'>
                <div>
                    <Link><img src={logo} alt="" width={50} /></Link>
                </div>
                <div className='hidden md:block '>
                        <ul className='flex gap-24  '>
                                    <li><NavLink to="/" className={({isActive})=>(
                                        `font-mono ${isActive ? "text-orange-700":"text-gray-400"}`
                                    )}>Home</NavLink></li>
                                    <li><NavLink to="/about" className={({isActive})=>(
                                    `font-mono ${isActive ? "text-orange-700": "text-gray-400"}`
                                )}>ABout</NavLink></li>
                                <li><NavLink to="/github" className={({isActive})=>(
                                    `font-mono ${isActive ? "text-orange-700": "text-gray-400"}`
                                )}>Github</NavLink></li>
                        
                        </ul>
                </div>
                <div>
                    <ul className='flex gap-6  '>
                        <li className='bg-red-600/30 rounded-lg px-2 py-0.5'><NavLink>Log in</NavLink></li>
                        <li className='bg-red-600/30 rounded-lg px-2 py-0.5'><NavLink>sign up</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='hidden w-44 h-screen bg-amber-200 relative right-10  '>
                    <ul className='absoulte'>
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Contact</NavLink></li>
                        <li><NavLink>Github</NavLink></li>
                    </ul>
            </div>
            
        </div>
    )
}