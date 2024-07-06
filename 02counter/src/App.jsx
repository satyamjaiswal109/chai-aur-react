//hook which is imported ,responsible for change in ui 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 function App() {
//    let counter=15
//    this is working in  backend but doesnot update the ui 
//    const addValue =()=>{
//     console.log("clicked",counter);
//     counter=counter+1
//    } 
 let [counter,setcounter]=useState(15)
     const addValue =()=>{
    
     setcounter(counter+1)
     setcounter(counter+1)
     setcounter(counter+1)
     setcounter(counter+1)
     
    
   } 
   const removeValue =()=>{
    
     setcounter(counter-1)
      
   } 


  return (
    <>
      
     <h1>chai aur react</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addValue}>Add Value:{counter}</button><br/>
     <button onClick={removeValue}>Remove Value:{counter}</button>
    </>
  )
}

export default App
