import { useState,useEffect } from "react";
import QuestionCard from "./QuestionCard";

const Booklet = () => {
  const [score,setScore]=useState(0)
  const [data,setData]=useState([]);
useEffect(()=>
{
 
},[score])
const fetchData = async ()=>
{
  const res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz`)
  const data=await res.json();
  setData(data.data);
}

  return (
    <div data-testid="Booklet">
      {/* create a div with className="welcome-div" here*/}
     
      {data.length===0?<div className="welcome-div"><h1>To begin the exam, click on the 'Start Exam' button below</h1>
      <button onClick={fetchData}>Start Exam</button> </div>
      :<div className="questions-container">
      <h3>Score:{score}</h3>
      <button onClick={()=>{setData([])&&setScore(0)}}>End Exam</button> 
     {data.map((Elem,Index)=>{return<QuestionCard question={Elem.question} options={Elem.options} correctOptionIndex={Elem.correctOptionIndex} score={score}    setScore={setScore}/>})}
      </div>}
  
      
     

    </div>
  );
};

export default Booklet;
