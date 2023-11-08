import React, { useState, useRef } from 'react';
import './Text.css';

const Text = () => {
    const [text, setText] = useState("");
    const textRef = useRef();
    const [clickCount, setClickCount] = useState(0);
    const [hoverCount, setHoverCount] = useState(0);
    const [focusCount, setFocusCount] = useState(0);
    const [hoverColor, setHoverColor] = useState('black');

    const UpperCase = () => setText(text.toUpperCase());
    const LowerCase = () => setText(text.toLowerCase());
    const ClearText = () => setText("");
    const Copy = () => navigator.clipboard.writeText(text);

    return (
        <div className="container">
            <h1 className="title"><b>Event Handlers</b></h1>

            <h2 className="subtitle"><i>onClick Event</i></h2>
            <button className="button" onClick={() => setClickCount(clickCount + 1)}>
                Clicked {clickCount} times
            </button>

            <h2 className="subtitle"><i>onMouseOver Event</i></h2>
            <div className="hover-div" onMouseOver={() => {setHoverCount(hoverCount + 1); setHoverColor('red');}} onMouseOut={() => setHoverColor('black')} style={{color: hoverColor}}>
                Hovered over {hoverCount} times
            </div>

            <h2 className="subtitle"><i>onFocus Event</i></h2>
            <input className="inputt" onFocus={() => setFocusCount(focusCount + 1)} type="text" />

            <h2 className="subtitle"><i>onChange Event</i></h2>
            <textarea className="form-control" value={text} onChange={e => setText(e.target.value)} ref={textRef} id="MyBox" rows="8"></textarea>
            <button className="btn btn-info my-3 mx-1" onClick={UpperCase}>Convert to UpperCase</button>
            <button className="btn btn-info my-3 mx-1" onClick={LowerCase}>Convert to LowerCase</button>
            <button className="btn btn-info my-3 mx-1" onClick={ClearText}>Clear Text</button>
            <button className="btn btn-info my-3 mx-1" onClick={Copy}>Copy Text</button>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p>Word Count is: {text == "" ? 0 : text.split(/\s+/).filter(word => word.trim() !== "").length} and Letter Count is: {text == "" ? 0: text.trim().length} </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter some text in the TextBox to preview'}</p>
            </div>
        </div>
    );
};

export default Text;
