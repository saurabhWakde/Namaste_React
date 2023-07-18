import React from 'react'
import Rescard from './Rescard'
import {useState, useEffect} from 'react';
import Shimmer from './utils/Shimmer';
import { Link, useParams } from 'react-router-dom';

const Body = () => {
  const [data,setData] =useState([]);
  
  
  const[veg,setVeg] =useState([]);
const [nonveg,setNonveg] =useState([]);
const [filterd,setFiltered]=useState([]);
  const [searchText,setSearchText] = useState("");
  const [viewall,setViewall]=useState([]);


 
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
setFiltered(res.data.cards)
setViewall(res.data.cards);


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
<button className='search-btn ' onClick={()=>{ const filteredres = data.filter((elem)=>
  {
    return(
 elem.data.data.name.toLowerCase().includes(searchText)
    )
  })
 setFiltered(filteredres)
 
}

}>Search</button>
</div>
       <button className='filter_btn' onClick={()=>{

       let filtereddata=data.filter((elem)=>
        {
          return(
            elem.data.data.avgRating>3.5
          )
        })
       
        setFiltered(filtereddata);
       }}>Top Rated</button>

       <button  className='filter_btn' style={{backgroundColor:"green"}} onClick={()=>
      {
        let filterveg =data.filter((elem)=> elem.data.data.veg===true)
        setFiltered(filterveg)
      }}>Sort by Veg</button>

      <button  className='filter_btn' style={{backgroundColor:"red"}} onClick={()=>
        {
          let filterNonveg =data.filter((elem)=> elem.data.data.veg===false)
          setFiltered(filterNonveg)
        }}>Sort by Non-veg</button>
        
        <button  className='filter_btn' style={{backgroundColor:"teal"}} onClick={()=>
          {
            
            setFiltered(data);
          }}>Showall</button>
        </div>

        <div className='res_container'>
        {
            filterd.map((Elem)=>
            {

               return(
                 <Link  key={Elem.data.data.id}  to={"/restaurant/"+Elem.data.data.id}><Rescard  resData={Elem}/></Link>               )
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
