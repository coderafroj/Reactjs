import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {
 

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <Card userName="Coderafroj" pro="web developer" img="https://i.postimg.cc/BnN2gyV3/IMG-20250605-092847.jpg" btn="sign up"/>
         <Card userName="Faizan" pro="Cyber cafe" img="https://i.postimg.cc/sxHWXPrW/IMG-20250605-130357.jpg" cls="bg-yellow-500 text-black"/>
         <Card userName="Rahul didi" img="https://i.postimg.cc/Wb5RNXH3/IMG-20250605-161538.jpg" pro="founder bytecore" cls="bg-yellow-500/30" btn="contact"/>
          <Card userName="Farhana"  btn="sign up"/>
         <Card userName="Kartik"  cls="bg-yellow-500 text-black"/>
         <Card userName="Kanak" btn="contact"/>
         <Card userName="Anubhav" btn="sign up"/>
         <Card userName="Sumit" cls="bg-yellow-500 text-black"/>
          <Card userName="Loveyansh"  btn="sign up"/>
         <Card userName="Faizan" pro="Cyber cafe" img="https://i.postimg.cc/sxHWXPrW/IMG-20250605-130357.jpg" cls="bg-yellow-500 text-black"/>
         <Card userName="Rahul didi" img="https://i.postimg.cc/Wb5RNXH3/IMG-20250605-161538.jpg" pro="founder bytecore" cls="bg-yellow-500/30" btn="contact"/>
          <Card userName="Coderafroj" pro="web developer" img="https://i.postimg.cc/BnN2gyV3/IMG-20250605-092847.jpg" btn="sign up"/>
         <Card userName="Faizan" pro="Cyber cafe" img="https://i.postimg.cc/sxHWXPrW/IMG-20250605-130357.jpg" cls="bg-yellow-500 text-black"/>
         <Card userName="Rahul didi" img="https://i.postimg.cc/Wb5RNXH3/IMG-20250605-161538.jpg" pro="founder bytecore" cls="bg-yellow-500/30" btn="contact"/>
         <Card userName="Coderafroj" pro="web developer" img="https://i.postimg.cc/BnN2gyV3/IMG-20250605-092847.jpg" btn="sign up"/>
         <Card userName="Faizan" pro="Cyber cafe" img="https://i.postimg.cc/sxHWXPrW/IMG-20250605-130357.jpg" cls="bg-yellow-500 text-black"/>
          <Card userName="Coderafroj" pro="web developer" img="https://i.postimg.cc/BnN2gyV3/IMG-20250605-092847.jpg" btn="sign up"/>
         <Card userName="Faizan" pro="Cyber cafe" img="https://i.postimg.cc/sxHWXPrW/IMG-20250605-130357.jpg" cls="bg-yellow-500 text-black"/>
         <Card userName="Rahul didi" img="https://i.postimg.cc/Wb5RNXH3/IMG-20250605-161538.jpg" pro="founder bytecore" cls="bg-yellow-500/30" btn="contact"/>
          <Card userName="Coderafroj"  btn="sign up"/>
       
         <Card userName="Muneesh"  cls="bg-yellow-500 text-black"/>
         <Card userName="Amaan" img="https://i.postimg.cc/Wb5RNXH3/IMG-20250605-161538.jpg" pro="founder bytecore" cls="bg-yellow-500/30" btn="contact"/>
         <Card userName="Kunal" pro="web developer" img="https://i.postimg.cc/BnN2gyV3/IMG-20250605-092847.jpg" btn="sign up"/>
         <Card userName="Arjun" pro="Cyber cafe" img="https://i.postimg.cc/sxHWXPrW/IMG-20250605-130357.jpg" cls="bg-yellow-500 text-black"/>
         
        
      </div>
      
    </div>
    
  
    
   
  )
}

export default App
