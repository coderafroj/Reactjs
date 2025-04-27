# custom react app

## portfolio link
[Click here](https://coderafroj.github.io)

# Solution code

## index.html

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>custom react</title>
</head>
<body>
  <div id="root"></div>
</body>
<script src="customreact.js"></script>
</html>


```

## customreact.js

```javascript
  
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



```
