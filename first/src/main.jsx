
import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function Me(){
	return(
		<div>hello </div>
	)
}
{/*
const reactElement={
	type:"a",
	props:{
		href:"https:coderafroj.vercel.app",
		target:"_blank"
	},
	children:"click to me"
}*/}
const a=(
	<a href="https://coderafroj.vercel.app">click me</a>
	
)
const user="coderafroj"
const re=React.createElement(
	"a",
	{href:"https://coderafroj.vercel.app"},
	"visit my website",
	
)
createRoot(document.getElementById('root')).render(
  
    // re
	<App/>
    
  
)
