import React from 'react'
import ReactDOM  from 'react-dom/client'
 import './Header.css'
import { logo_url } from './utils/content'
import {useState} from 'react'
import { Link } from 'react-router-dom'
const Header=()=>
{
  const [btn,setBtn]=useState("Login")
    return(
        <div className='header'>
    <div className='logo_container'>
  <img className='logo' src={logo_url} />
    </div>

    <div className='navitems'>
         <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About Us</Link></li>
         <li><Link to="/contact">Contact Us</Link></li>
         <li>Cart</li>
        <Link to="/login"> <button className='filter_btn' onClick={()=>{ btn==="Logout"?setBtn("Login"):setBtn("Logout")}}>{btn}</button></Link>
         </ul>
    </div>


    </div>
    )
}



export default Header;

    
