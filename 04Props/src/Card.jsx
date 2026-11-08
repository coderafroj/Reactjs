function Card(){
    return(
        <div className="flex flex-col sm:flex-row justify-center bg-amber-100 rounded-l-lg max-w-xl mx-auto my-6 items-center overflow-hidden">
            <div className="w-full h-48 shrink-0 sm:w-40 sm:h-auto">
                <img className=" w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1762876946958-54ecb824dd8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt=""  />
            </div>
            <div className="p-6 flex flex-col  justify-center w-full ">
                <h2>Codrafroj</h2>
                <h3>Web dev</h3>
                <p>meself coderafroj and a i am cybersecurty aspirants. i am from india</p>
            </div>
        </div>
    )
}
export default Card