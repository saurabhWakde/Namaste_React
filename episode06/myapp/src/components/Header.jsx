import React from 'react'
import ReactDOM  from 'react-dom/client'
 import './Header.css'
import { logo_url } from './utils/content'
import {useState} from 'react'
const Header=()=>
{
  const [btn,setBtn]=useState("Login")
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
         <button className='filter_btn' onClick={()=>{ btn==="Logout"?setBtn("Login"):setBtn("Logout")}}>{btn}</button>
         </ul>
    </div>


    </div>
    )
}



export default Header;

    
