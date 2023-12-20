import {React,useEffect,useState} from 'react'
import {useLoaderData } from 'react-router-dom';



function Github() {
// const[data,setData] =useState([]);

//  useEffect(()=>{
//      fetch('https://api.github.com/users/suraj-jha7')
//     .then((respone)=>respone.json())
//     .then((data)=>{console.log("this is data.....",data)
    
//     setData(data);})
//  },[])
   
   const data=useLoaderData(gitHubinfoLoader);
  return (
    <div style={{backgroundColor:"lightgrey" ,display:'flex', alignItems:'center', borderRadius:'25px' ,overflow:'hidden'}}>
        <div>
        <img src={data.avatar_url} alt="avatar " />
        </div>
      
      <div> 
      <h2>Name:{data.name}</h2>
      <h2>Github followers:{data.followers}</h2>
      <h2>No of public repos:{data.public_repos}</h2>
      </div>
     
    </div>
  )
}

export const  gitHubinfoLoader=async()=>{
    const response =await fetch('https://api.github.com/users/suraj-jha7');
    return response.json();

}
export default Github
