import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const anotherUser="chai aur react"

const reactElement=React.createElement(
  'a',
  {href:'https://yahoo.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
   

)
