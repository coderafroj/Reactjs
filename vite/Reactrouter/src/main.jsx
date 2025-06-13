import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Leyout from "./Leyout.jsx"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Github from "./Components/Github/Github"

const router=createBrowserRouter([
  {
    path:"/",
    element:<Leyout/>,
    children:[
     {
       path:"",
       element:<Home/>
     } ,
     {
       path:"about",
       element:<About/>
     },
     {
       path:"Github",
       element:<Github/>
     }
      ]
  }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
