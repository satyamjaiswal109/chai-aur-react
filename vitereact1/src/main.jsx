import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// function Myapp()
// {
//   return( 
//     <div>
//       <h1>Cu/mpstom App</h1>
//     </div>
//   )
// }
const reactElement = React.createElement(
     'a',
     {href:"https://google.com",target:"_blank"},
     'click me'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
 