import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Upper was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    //console.log("Upper was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    //console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('enter text here');
  return (
    
      <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="11"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-danger" onClick={handleLoClick}>Convert to Lower Case</button>

    </div>
    <div className="container my-4">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters.</p>
      <p> {0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview </h2>
      <p>{text}</p>
    </div>
    </>
  )
}
