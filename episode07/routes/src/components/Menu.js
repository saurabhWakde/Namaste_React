import React from 'react'
import Header from './Header'
import { useEffect,useState } from 'react'
import Shimmer from './utils/Shimmer';
import {Link, useParams} from 'react-router-dom';


const Menu = () => {
const [resMenu,setResMenu] = useState([]);
const  {resId}= useParams();


useEffect(()=>
{
fetchMenu();
},[])


const fetchMenu = async ()=>
{
    const menuData = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6491735&lng=73.7706532&restaurantId=`+resId)
   const res = await menuData.json();
 setResMenu(res?.data?.cards);



}
if(resMenu.length===0)
{
    return(<div><Header/>  <Shimmer/></div>)
}



const {itemCards}=resMenu[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  return (

    <div className='menu'>
    <Header/>
    
   
           
            <h1>{resMenu[0].card.card.info.name}</h1>
            <h2>Menu</h2>
            <ul>
            {itemCards.map((elem)=><li  key={elem.card.info.id}>{elem.card.info.name} {" "} {"₹:"+elem.card.info.price/100}</li>)}
            </ul>
            
          
         
   
   
   
    
    </div>
  )
}

export default Menu
