import avtar from '../../assets/avtr.jpg'
export default function About(){
    return(
        <div className="w-full bg-black h-screen text-white">
                    <div className='max-w-md w-full h-screen md:flex-row  flex flex-col justify-center items-center mx-auto md:gap-32 gap-6 '>
                        <div className=' '>
            <div className='w-full  '><img className='rounded-2xl mt-0' src={avtar} alt="" /></div>
                        </div>
                        <div className='w-1/2 text-center'>
                            <h2 className='text-2xl capitalize  '>myself ByteCore </h2>
                        </div>
                    </div>
                </div>
    )
}