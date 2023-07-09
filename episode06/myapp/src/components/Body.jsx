import React from 'react'
import Rescard from './Rescard'
import {useState, useEffect} from 'react';
import Shimmer from './utils/Shimmer';
const Body = () => {
  const [data,setData] =useState([]);
  const[veg,setVeg] =useState([]);
const [nonveg,setNonveg] =useState([]);
  const [searchText,setSearchText] = useState("");

  console.log("body rendered")
  useEffect(()=>
  {
 fetchData();
  },[])

  const fetchData =async ()=>
  {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6491735&lng=73.7706532&offset=31&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
const res = await data.json();
setData(res.data.cards);
setVeg(res.data.cards)
setNonveg(res.data.cards)


  } 
  if (data.length === 0) {
    return( 
    <Shimmer/>
    )
  }
  return (
    <div className='body'>

        <div className='filter'>
        <div className='search'>
<input type='text' style={{outline:"none",marginRight:"5px"}} className='search-bocx' placeholder='Find restaurant' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
<button className='search-btn ' onClick={()=>{console.log(searchText)}}>Search</button>
</div>
       <button className='filter_btn' onClick={()=>{

       let filtereddata=data.filter((elem)=>
        {
          return(
            elem.data.data.avgRating>3.5
          )
        })
       
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
