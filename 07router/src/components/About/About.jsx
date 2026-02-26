import avtar from '../../assets/avtr.jpg'
export default function About(){
    return(
        <div className="w-full bg-black h-screen text-white">
                    <div className='max-w-md w-full h-screen flex justify-center items-center mx-auto gap-32 '>
                        <div className=' '>
            <div className='w-full  '><img className='rounded-2xl mt-0' src={avtar} alt="" /></div>
                        </div>
                        <div className='w-1/2'>
                            <h2>myself ByteCore </h2>
                        </div>
                    </div>
                </div>
    )
}