import React, { useState } from 'react';

export default function TextForm(props) {
  const uppClick = () => {
    let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(newText);
    props.showalert('Converted to Title Case', 'success');
};

  const upperClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showalert('Converted to Title Case', 'success');
};

  const upClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UpperCase", "success");
  }

  const lowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase", "success");
  }

  const clearClick = () => {
    setText("");
    props.showalert("Text Cleared", "success");
  }

  const handelCopy = () => {
    let text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("Text Copied To Clipboard", "success");
  }

  const handelExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra Spaces Removed", "success");
  }

  const onChangeClick = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="MyBox" rows="10" value={text} placeholder='Enter Text Here' onChange={onChangeClick}></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={upClick}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={lowerClick}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handelCopy}>Copy</button>
        <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handelExtraSpace}>Remove Extra Space</button>
        <button disabled={text.length === 0} className="btn btn-danger" onClick={clearClick}>Clear</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={upperClick}>Convert first letter to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={uppClick}>Convert first letter every word to UpperCase</button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
      </div>
    </>
  )
}
