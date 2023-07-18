import React from "react";
import Header from "./Header";

{/* class Bases componenets */}

class About extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(props)
    this.state=
    {
    count:0,
    
    }
  }
  render()
  {
    const {name,location,contact}=this.props
    const {count}=this.state
    return(
      <div>
      <Header/>
    
      <div className="usercard">
      <h2>{name}</h2>
      <h2>count {count}</h2>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
      <h3>{location}</h3>
      <h4>{contact}</h4>
      </div>
      </div>
     
    )
  }
  
}
export default About