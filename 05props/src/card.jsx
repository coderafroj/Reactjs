export default function Card({username,btn}){
    
    
    return(
        <div className="w-full grid place-content-center ">
            <div className="h-96 w-100 bg-center bg-cover rounded-lg relative shadow-2xl box-content " style={{backgroundImage:"url('https://images.unsplash.com/photo-1554080353-a576cf803bda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D')"}}>
            <div className="flex justify-center items-center absolute bottom-0">
                <div className="py-4"><h1 className="text-2xl inline ml-6 font-extrabold text-transparent bg-clip-text text-shadow-2xs bg-linear-80 from-black via-white to-white">{username}</h1>
                <p className="px-3 text-white">
                   Hi, I'm {username} ⚡
A self-taught developer on a mission to master frontend development.
Currently learning React.js & building projects one line of code at a time.
                </p>
                <div className="flex justify-center items-center gap-16 mt-3">
                    <button className="bg-white px-2 py-1 rounded-sm">{btn}</button>
                <button className="bg-white px-2 py-1 rounded-sm"><img src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png" width={"30px"} alt="" /></button>
                <button className="bg-white px-2 py-1 rounded-sm"><img src="https://cdn-icons-png.flaticon.com/128/25/25657.png" width={"30px"} alt="" /></button>
                </div>
                </div>
            </div>

            </div>

        </div>
    )
}