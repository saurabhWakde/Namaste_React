import React from 'react'
import { shimmer_logo } from './content'

const Shimmer = () => {
  return (
   <div className='body'>
   <div className='filter'>
    <button className='filter_btn'  style={{backgroundColor:"gray",textAlign:""}} >Top Rated</button>

    <button  className='filter_btn' style={{backgroundColor:"gray"}}>Sort by Veg</button>

   <button  className='filter_btn' style={{backgroundColor:"gray"}} >Sort by Non-Veg</button> 
   <br></br>
     </div>

    <div className='res_container'>

    
    

       <div className='res_shimmer' key="1" >
        <img  className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
       </div>
       <div className='res_shimmer' key="2" >
        <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
       </div>
       <div className='res_shimmer' key="3" >
        <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
       </div>
       <div className='res_shimmer' key="4" >
        <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
       </div>
       <div className='res_shimmer' key="5" >
        <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
       </div>
       <div className='res_shimmer' key="6" >
        <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
       </div>
       <div className='res_shimmer' key="7" >
        <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
       </div>
       <div className='res_shimmer' key="8" >
       <img  className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
       <button></button>
       <button></button>
       <button></button>
       <button></button>
      </div>
      <div className='res_shimmer' key="9" >
       <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
       <button></button>
       <button></button>
       <button></button>
       <button></button>
      </div>
      <div className='res_shimmer' key="31" >
       <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
       <button></button>
       <button></button>
       <button></button>
       <button></button>
      </div>
      <div className='res_shimmer' key="10" >
       <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
       <button></button>
       <button></button>
       <button></button>
       <button></button>
      </div>
      <div className='res_shimmer' key="11" >
       <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
       <button></button>
       <button></button>
       <button></button>
       <button></button>
      </div>
      <div className='res_shimmer' key="12" >
       <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
       <button></button>
       <button></button>
       <button></button>
       <button></button>
      </div>
      <div className='res_shimmer' key="13" >
       <img className='res_logo' src={shimmer_logo} alt='Loading....' width={"200px"}/>
       <button></button>
       <button></button>
       <button></button>
       <button></button>
      </div>
       
     

    </div>
    </div>
  )
}

export default Shimmer
