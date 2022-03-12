import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpclick = () => {
    //console.log("handleUpclick is clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowclick = () => {
    //console.log("handleUpclick is clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handletoClearclick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    let newText = document.getElementById("textarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    // setText(newText);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleOnchange = (event) => {
    // console.log("handleOnchange is clicked");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnchange}
            id="textarea1"
            rows="8"
            value={text}
            style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black' }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handlelowclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
         Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
         Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handletoClearclick}>
          Clear Text
        </button>

      </div>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Counter</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minitues To read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textBox to preview it."}</p>
      </div>
    </>
  );
}
