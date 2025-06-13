import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import Leyout from "./Leyout.jsx"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Github from "./Components/Github/Github"
import Contact from "./Components/Contact/Contact"
import User from "./Components/User/User"

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Leyout/>,
//     children:[
//     {
//       path:"",
//       element:<Home/>
//     } ,
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"Github",
//       element:<Github/>
//     }
//       ]
//   }
//   ])
const router=createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Leyout/>}>
   <Route path="" element={<Home/>}/>
   <Route path="About" element={<About/>}/>
   <Route path="github" element={<Github/>}/>
   <Route path="contact" element={<Contact/>}/>
   <Route path="user/:id" element={<User/>}/>
   
   </Route>
    )
  )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
