    import { useState } from "react"

    export default function Sum(){
        let [totalSeconds,setTotalSeconds]=useState("");
        let [hour,setHour]=useState('');
        let [minute,setMinute]=useState('')
        let [second,setSecond]=useState('')
        let [error,setError]=useState("");
        

        const secConverter=()=>{
            if(totalSeconds.trim()==""){
                setError("Plse babu second to dalo");
                setHour(0)
                setMinute(0);
                setSecond(0)
                return;
            }
            setError("")
            let h,m ,s;
            h=Math.floor(totalSeconds/3600);
            let r=totalSeconds%3600;
            m=Math.floor(r/60);
            s=r%60;
            setHour(h)
            setMinute(m)
            setSecond(s)

        }
    

        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:'100vh',flexDirection:'column',backgroundColor:"skyblue"}}>
                <div style={{ maxWidth:'200px',backgroundColor:"green",padding:'15px 25px 15px 25px',borderRadius:'12px'}}>
                    <label htmlFor="s"> Enter seconds:</label>
                <input style={{marginTop:'6px',border:'none',borderRadius:'3px'}} type="number" enter seconds id="s"value={totalSeconds} onChange={(e)=>setTotalSeconds(e.target.value)} />
                <br />
                <p>{hour} hour,{minute} minute,{second} sec</p>
                <p>{error}</p>
                <br />
                <button style={{border:'none',padding:'2px'}} onClick={secConverter}>Calculate</button>
                </div>


            </div>
        )
    }