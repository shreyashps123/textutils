import React, {useState} from 'react'

export default function Textform(props) {

  const handleUpClick= ()=>{
    //console.log("UpperCase was clicked"+text)
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlert(": Converted to Uppercase successfully","success");
  }

  const handleLowClick= ()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert(": Converted to Lowercase successfully","success");
  }

  const handleCpyClick= ()=>{
    navigator.clipboard.writeText(text)
    props.showAlert(": Message copied successfully","success");
  }

  const handleRsetClick=()=>{
    let newtext=""
    setText(newtext)
    props.showAlert(": Text cleared","success");
  }

  const handleOnChange= (event)=>{
    //console.log("On change")
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  
  return (
    <>
    <div className='container' style={{color :props.mode==='dark'?'white':'black'}}>
      
      <h2>{props.heading}</h2>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} style={{backgroundColor :props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={handleCpyClick} >Copy to Clipboard</button>
        <button className="btn btn-primary mx-3" onClick={handleRsetClick} >Reset</button>
      
    </div>
    <div className="container my-4" style={{color :props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Time required to read {0.008*text.split(" ").length} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somthing to preview here"}</p>
    </div>
    </>
  )
}
