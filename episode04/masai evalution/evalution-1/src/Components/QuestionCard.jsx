import { useEffect, useState } from "react";
import Option from "./Option";
const QuestionCard=({question,score,options,correctOptionIndex,style,setScore}) => {
  const[ans,setAns]=useState('Show Ans')
  const [showAns,setShowAns]=useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [correct,setCorrect]=useState(false);
  console.log();

 const handleOptionClick =(index)=>
 {
if(index===correctOptionIndex&&selectedOption!==index)
{
  setScore((prevScore)=>prevScore+1);
  setSelectedOption(index);

}
setCorrect(true);
 }

  
useEffect(()=>
{

},[ans,correct])

const toggleAnswer =()=>
{
  if(showAns)
  {
    setAns("Show Ans");
    setShowAns(false)
  }
  else
  {
    setAns("Hide Ans");
    setShowAns(true)
  }
}



  return (
    <div className="question-card">
      {/* add question here */}
      <h3>{question+":"+correctOptionIndex}</h3>

     
      <div className="show-ans">
      <button onClick={toggleAnswer} >{ans}</button>
      {showAns===false &&<div className="options">
     {options.map((Elem,index)=>{return<Option
      key={index}
      text={options+":"+index}
      onClick={() => handleOptionClick(index)}
                  disabled={selectedOption!==-1||correct===true}
                  correct={correct&&index===correctOptionIndex}
                  selected={selectedOption===index}
    />} )}
      </div>}
      {showAns && <p style={{color:"green"}}>{options[correctOptionIndex]} </p>}
      </div>
    </div>
  );
};

export default QuestionCard;
