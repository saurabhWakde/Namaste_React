import React from 'react';

const Rescard = (props) => {
  const { resData } = props;
const {name,cloudinaryImageId,deliveryTime,costForTwo,id} = resData?.data.data;

  return (
    <div className='res_card' >
     <img className='res_logo' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
      <h4>{name}</h4>
      <h4>{"price: ₹ "+costForTwo/100}</h4>
      <h4>{deliveryTime +"mins left"}</h4>
      
    
    </div>
  );
};

export default Rescard;
