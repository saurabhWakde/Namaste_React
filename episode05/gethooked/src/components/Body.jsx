import React from 'react'
import Rescard from './Rescard'
import reslist from './utils/data'
import {useState} from 'react';
 


  
const Body = () => {
  let [data,setData] =useState(reslist);
  let [veg,setVeg] =useState(reslist);
  let [nonveg,setNonveg] =useState(reslist);

  return (
    <div className='body'>

        <div className='filter'>
       <button className='filter_btn' onClick={()=>{

       let filtereddata=data.filter((elem)=>
        {
          return(
            elem.data.data.avgRating>4
          )
        })
         console.log(data);
        setData(filtereddata);
       }}>Top Rated</button>

       <button  className='filter_btn' style={{backgroundColor:"green"}} onClick={()=>
      {
        let filterveg =veg.filter((elem)=> elem.data.data.veg===true)
        setData(filterveg)
      }}>Sort by Veg</button>

      <button  className='filter_btn' style={{backgroundColor:"red"}} onClick={()=>
        {
          let filterNonveg =nonveg.filter((elem)=> elem.data.data.veg===false)
          setData(filterNonveg)
        }}>Sort by Non-veg</button>
        </div>

        <div className='res_container'>
        {
            data.map((Elem)=>
            {

               return(
                 <Rescard  resData={Elem} key={Elem.data.data.id}/>
               )
            })
           }

            {/*
            Another way of writing it
             reslist.map(Elem=> 
                 <Rescard resData={Elem}/>
               )
            
           
            */}
       
        </div>
        </div>
  )
}

export default Body
