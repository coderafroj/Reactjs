const container=document.getElementById('coder')
const reactElement={
    type:"a",
    props:{
        href:"https://coderafroj.vercel.app",
        target:"_blank"
    },
    child:"visit my website"
}
function customRender(container,reactElement){
    // const dl=document.createElement(reactElement.type)
    // dl.innerHTML=reactElement.child
    // dl.setAttribute('href',reactElement.prop.href)
    // dl.setAttribute('target',reactElement.prop.target)
    // container.appendChild(dl)
    const dl=document.createElement(reactElement.type)
    dl.innerHTML=reactElement.child
    for(const prop in reactElement.props){
        if(prop==reactElement.child)continue
        dl.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(dl)
}

customRender(container,reactElement)