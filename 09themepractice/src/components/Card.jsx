import logo from '../assets/r.png'
export default function Card(){
    return(
        <div className="grid place-content-center">
            <div className='w-full mx-auto bg-green-900 dark:bg-black  px-3 py-4 rounded-lg'>
                <div className='w-54 h-32 rounded-sm bg-red-200 mb-2'><img className='object-cover w-full h-full rounded-sm' src={logo} alt="" /></div>
                <div className='w-54'>
                    <h2 className='text-white font-bold font-mono text-xl'>Happy Eid-ul-Fitr</h2>
                    <p className='leading-tight text-white font-light'>coderafroj wishes you and your family a joyfull and blessed <span className='text-black font-bold dark:text-white dark:font-extrabold'>Eid-ul-Fitra.</span></p>
                </div>
                <div className='text-center mt-3'>
                    <button className='capitalize bg-yellow-600 shadow-2xl cursor-pointer px-2 py-1 rounded-lg backdrop-blur-2xl'>celebrate</button>
                </div>

            </div>
        </div>
    )
}