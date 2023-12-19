import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
     <h1> 
      <p>
        <NavLink to='/home'> Home </NavLink>
        <NavLink to='/about'> About </NavLink>
        <NavLink to='/contact'> Contact </NavLink>
        
        </p>  
    
     </h1>
    </div>
  )
}

export default Header
