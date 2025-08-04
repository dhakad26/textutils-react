import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");

  const handleUppercase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleRemoveExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert("Extra spaces removed", "success");
  };

  const handleApplyChanges = () => {
    setText(text);
    props.showAlert("Changes applied", "info");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handlePaste = async () => {
    try {
      const textFromClipboard = await navigator.clipboard.readText();
      setText(text + textFromClipboard);
      props.showAlert("Text pasted from clipboard!", "success");
    } catch (err) {
      props.showAlert("Failed to paste from clipboard.", "danger");
    }
  };

  const handleCut = () => {
    navigator.clipboard.writeText(text);
    setText("");
    props.showAlert("Text cut to clipboard!", "success");
  };

  const handleOnChange = () => {
    setText(document.getElementById("myBox").value);
  };

  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#495057' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUppercase}>Uppercase</button>
        <button className="btn btn-success mx-3" onClick={handleLowercase}>Lowercase</button>
        <button className="btn btn-info mx-3" onClick={handleRemoveExtraSpaces}>Remove Spaces</button>
        <button className="btn btn-secondary mx-3" onClick={handleClear}>Clear</button>
        <button className="btn btn-dark mx-3" onClick={handleApplyChanges}>Apply</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
        <button className="btn btn-secondary mx-3" onClick={handlePaste}>Paste</button>
        <button className="btn btn-success my-3" onClick={handleCut}>Cut</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your text summary</h3>
        <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string,
  showAlert: PropTypes.func.isRequired
};


