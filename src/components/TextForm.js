import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] =useState('');
    const handleUpclick=()=>{
        //console.log("handleUpclick is clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handlelowclick=()=>{
        //console.log("handleUpclick is clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnchange=(event)=>{
        // console.log("handleOnchange is clicked");
        setText(event.target.value);
    }
    
  return (
      <>
        <div className="container my-4">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8" value={text}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handlelowclick}>Convert to Lowercase</button>
        </div>
        <div className="container my-4">
            <h2>Text Counter</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minitues To read the text</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
