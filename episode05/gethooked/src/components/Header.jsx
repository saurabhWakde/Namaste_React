import React from 'react'
import ReactDOM  from 'react-dom/client'
 import './Header.css'
import { logo_url } from './utils/content'
const Header=()=>
{
    return(
        <div className='header'>

    <div className='logo_container'>
  <img className='logo' src={logo_url}/>
    </div>

    <div className='navitems'>
         <ul>
         <li>Home </li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
         </ul>
    </div>


    </div>
    )
}



export default Header;

    
