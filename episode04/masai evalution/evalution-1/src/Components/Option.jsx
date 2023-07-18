const Option = ({onClick,text,disabled,correct, selected}) => {
  const optionStyle={
    
    backgroundColor: selected ? (correct ? "green" : "red") : "",
    color:selected ? (correct ? "white" : "red") : ""
  };
  return <div data-testid="option">{/* create a button here */}
  <button className="option" style={optionStyle} onClick={onClick} disabled={disabled} >{text}</button>
  </div>;
};

export default Option;
