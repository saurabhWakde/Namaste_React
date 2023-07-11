import React from 'react';
import { image_url } from './utils/content';
const Rescard = (props) => {
  const { resData } = props;
const {name,cloudinaryImageId,deliveryTime,costForTwo,avgRating} = resData?.data.data;

  return (
    <div className='res_card' >
     <img className='res_logo' src={image_url+cloudinaryImageId}/>
      <h4>{name}</h4>
      <h4>{"price: ₹ "+costForTwo/100}</h4>
      <h4>{deliveryTime +"mins left"}</h4>
      <h6>{"Rating: "+avgRating}</h6>
      
    
    </div>
  );
};

export default Rescard;
