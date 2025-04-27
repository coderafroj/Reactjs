  
function customRender(reactElemen,main){
//  const domElement=document.createElement//(reactElemen.type)
//  domElement.innerHTML=reactElemen.children
 // domElement.setAttribute("href",reactElemen//.props.href)
//  domElement.setAttribute("target"//,reactElemen.props.target)
//  main.appendChild(domElement)
//best
const domElement=document.createElement("reactElemen.type")
domElement.innerHTML=reactElemen.children
for(const prop in reactElemen.props){
  domElement.setAttribute(prop,reactElemen.props[prop])
}

}
const reactElemen={
  type:"a",
  props:{
    href:"https://google.com"
  },
  children:"click me to visit google"
}
const main=document.querySelector("#root")
customRender(reactElemen,main)
