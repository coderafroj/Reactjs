import { useContext } from "react";
import userContext from "../userContext";

export default function Profile(){
    const {user}=useContext(userContext)
    if(!user.username)return <div>please login kren</div>
    return <div>welcome to {user.username}</div>
}