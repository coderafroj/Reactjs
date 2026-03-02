
import {useParams} from "react-router-dom"
export default function(){
const {id}=useParams()
	return(
		<div className="bg-sky-400/30 w-full h-screen grid place-content-center">
		<div>your name is {id} okay welcome {id}</div>
		</div>
	)
}
