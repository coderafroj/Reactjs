function customeRender(reactElement,c){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    c.appendChild(domElement);

}


let container=document.getElementById('coder');


const reactElements={
    type:'a',
    props:{
        href:"http://coderafroj.me",
        target:"_blank"
    },
    children:"click me"
};
customeRender(reactElements,container)