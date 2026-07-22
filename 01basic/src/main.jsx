import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react';

function MyApp(){
  return(
    <div>my app by coderafroj</div>
  )
}

const reactElements={
    type:'a',
    props:{
        href:"http://coderafroj.me",
        target:"_blank"
    },
    children:"click me"
};
 const name="coderafroj"

//react convert myapp function object 
const reactElement=React.createElement(
  "a",
  {
    href:"https://codarafroj.vercel.app",target:'_blank'
  },
  "click me",
  name

)

createRoot(document.getElementById('root')).render(
  // MyApp()
  // reactElement
  <App/>
  )