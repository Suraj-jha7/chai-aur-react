

function customRender(reactElement,container)
{
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    const propsArray=Object.entries(reactElement.props)
    propsArray.forEach(element => {
        domElement.setAttribute(element[0],element[1]);
    });

    container.appendChild(domElement);
}


const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"Click me to visit google"
}


const reactElement1={
        type:'p',
        props:{},
        children:'THis is a paragraph........'
}
const mainContainer=document.querySelector("#root");
customRender(reactElement,mainContainer);
customRender(reactElement1,mainContainer);