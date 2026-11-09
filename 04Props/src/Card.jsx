function Card({name,profession="web dev",location="india",}){
    console.log(name);
    
    return(
        <div className="flex gap-3 flex-col sm:flex-row justify-center bg-red-700 rounded-lg shadow-md max-w-lg w-fit overflow-hidden">
            <div className="w-full h-48 shrink-0 sm:w-40 sm:h-full">
                <img className=" w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1762876946958-54ecb824dd8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt=""  />
            </div>
            <div className=" flex flex-col justify-center w-full p-6 mb-6cd ">
                <div className="mb-6"><h2 className="text-2xl font-bold text-gray-900">{name}</h2>
                <h3 className="uppercase text-amber-600 tracking-wide">{profession}</h3>
                <p className="text-gray-700 capitalize">meself {name} and a i am cybersecurty aspirants. i am from {location}</p></div>
                <div className="flex w-full gap-6 ">
                    <button className="bg-sky-400 rounded-lg px-3 py-2">Github</button>
                <button className="px-3 py-2 rounded-lg bg-sky-400">conect now</button>
                </div>
            </div>
        </div>
    )
}
export default Card