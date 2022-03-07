import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] =useState('Enter text here');
    const handleUpclick=()=>{
        //console.log("handleUpclick is clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnchange=(event)=>{
        // console.log("handleOnchange is clicked");
        setText(event.target.value);
    }
    
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8" value={text}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
    </div>
  )
}
