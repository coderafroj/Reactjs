<<<<<<< HEAD
export default function Card({name,job,logo}){
    
=======

export default function Card({name,job}){
    console.log('props',props);
>>>>>>> ced4eb26594b73d1774cf625a5d06b929f3734a7
    
    return(
        <div>
            <div className="w-full md:flex-row flex flex-row gap-3 items-center bg-amber-500/30 rounded-2xl mt-4">
<<<<<<< HEAD
                <div className="w-full flex flex-col justify-center items-center">
                    <div className=" w-24"><img className="" src={logo}  alt="" /></div>
=======
                <div className="w-[30%] flex flex-col items-center justify-center">
                    <div className=" w-24"><img className="  object-fit" src="https://coderafroj.vercel.app/assets/coderafroj-uPbNmmHm.png"  alt="" /></div>
>>>>>>> ced4eb26594b73d1774cf625a5d06b929f3734a7
                    <div><h2>{name}</h2></div>
                    </div>
                <div className="w-[60%]">
                    <p>hello my name is {name} and i am {job} aspirians <br />and i am living bareilly</p>
                </div>
                   
            </div>
        </div>
    )
}
