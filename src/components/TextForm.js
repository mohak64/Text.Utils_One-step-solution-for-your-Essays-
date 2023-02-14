import React, {useState} from 'react'



export default function TextForm(props) {
  
  const handleOnChange = (event)=>{
    //console.log("on change");
    setText(event.target.value); // isse type kr payenge
    
  }
  const handleUpClick = ()=>{
    //console.log("Upper was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Upper case", "success");
  }
  const handleLoClick = ()=>{
    //console.log("Upper was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lower case", "success");
  }
  const handleCaClick = ()=>{ //TO CAPITALIZE FIRST CHAR OF EACH WORD
    const arr = text.split(" ");

    //loop through each element of the array and capitalize the first letter.


    for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();

    }

    //Join all the elements of the array back into a string 
    //using a blankspace as a separator 
    const str2 = arr.join(" ");
    let newText = str2;
    setText(newText);
  }
  const handleClClick = ()=>{
    //console.log("Upper was clicked" + text);
    let newText = '';
    setText(newText);
  }
  const handleCopy = () => {
    let text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //to deselect the selected while copying
    props.showAlert("Data is Copied", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState('');
  return (
    
      <>
      <div className="container my-5"style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-2">
        
        <textarea className="form-control" value={text} style={ { backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode==='light'?'black':'white'} } onChange={handleOnChange}/*taki type kr sku(value ko state variable ki tarah use kr rhe hai)*/ id="myBox" rows="11"></textarea>
        </div>
        <button disabled={text.length===0}  className="btn btn-secondary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length===0}  className="btn btn-danger mx-2 my-2" onClick={handleLoClick}>Convert to Lower Case</button>
        <button disabled={text.length===0}  className="btn btn-dark mx-2 my-2" onClick={handleCaClick}>Capitalize first Char</button>
        <button disabled={text.length===0}  className="btn btn-success mx-2 my-2" onClick={handleClClick}>Clear Text</button>
        <button disabled={text.length===0}  className="btn btn-warning mx-2 my-2" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-4 " style={{color: props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
      <p> {0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length) } Minutes read</p>
      <h2>Preview </h2>
      <p>{text.length>0?text:"Enter something in the Text box above to preview it here... "}</p>
    </div>
    </>
  )
}
