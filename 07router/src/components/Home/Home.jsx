import avtar from '../../assets/avtr.jpg'
export default function Home(){
    return(
        <div className="w-full bg-black flex justify-center min-h-screen items-center text-white px-6">
            <div className=' w-full md:flex-row flex flex-col justify-center items-center mx-auto max-w-6xl'>
                <div className='w-full md:w-1/2 flex justify-center'>
    <div className=' w-60'><img  className='rounded-2xl mt-0 w-60 h-60 object-cover  ' src={avtar} alt="" /></div>
                </div>
                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <h2 className='text-3xl capitalize'>myself ByteCore </h2>
                </div>
            </div>
        </div>
    )
}