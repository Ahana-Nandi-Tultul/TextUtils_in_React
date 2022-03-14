import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpclick = () => {
    //console.log("handleUpclick is clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handlelowclick = () => {
    //console.log("handleUpclick is clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handletoClearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("The TextBox has been Cleared", "success");
  };
  const handleCopy = () => {
    let newText = document.getElementById("textarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("The Text has been copied to clipboard", "success");
    // setText(newText);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been removed from text", "success");
  };
  const handleOnchange = (event) => {
    // console.log("handleOnchange is clicked");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnchange}
            id="textarea1"
            rows="8"
            value={text}
            style={{backgroundColor: props.mode==='dark'?' #213081':'white', color: props.mode==='dark'?'white':'black' }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
         Copy to Clipboard
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
         Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handletoClearclick}>
          Clear Text
        </button>

      </div>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Counter</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minitues To read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview."}</p>
      </div>
    </>
  );
}
