import avtar from '../../assets/avtr.jpg'
import { NavLink } from 'react-router-dom'
export default function About(){
    return(
        <div className="w-full bg-black flex justify-center min-h-screen items-center text-white px-6 gap-12">
                    <div className='w-full md:flex-row flex flex-col justify-center items-center mx-auto max-w-6xl '>
                        <div className='w-full md:w-1/2 flex justify-center '>
            <div className='w-60  '><img className='rounded-2xl mt-0' src={avtar} alt="" /></div>
                        </div>
                        <div className='w-full md:w-1/2 text-center md:text-left p-4'>
                            <h2 className='text-2xl capitalize  '>myself ByteCore </h2>
                            <h2 className='text-2xl capitalize'>my projects</h2>

                            <NavLink to="/currency">currency</NavLink><br />
                            <NavLink to="/bgchanger">bgChanger</NavLink>
                        </div>
                    </div>
        </div>
    )
}