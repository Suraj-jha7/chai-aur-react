import {useState} from "react"

export default function App() {
const [color,setColor]= useState("olive")

  return (
    <>
        <div className="w-full h-screen duration-1000" style={{backgroundColor:color}} >

        <div className="fixed flex flex-wrap justify-center bottom-12 gap-3   ">
          
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">            <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>red</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">          <button className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>green</button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>blue</button>
          </div>
        </div>

        </div>
    </>
  )
}
