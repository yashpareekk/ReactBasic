import React, { useRef, useState } from 'react';
import './Ref.css'

const Ref = () => {
  const inputRef = useRef(null);
  const [message, setMessage] = useState('');

  const handleFocusClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClearClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleBlur = () => {
    setMessage('Input field lost focus.');
  };

  const handleFocus = () => {
    setMessage('Input field is focused.');
  };

  return (
    <div className="ref-container">
      <h1>Focus Input Using useRef</h1>
      <input
        type="text"
        ref={inputRef}
        className="input-field"
        placeholder="Type something..."
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <button className="focus-button" onClick={handleFocusClick}>Focus Input</button>
      <button className="clear-button" onClick={handleClearClick}>Clear Input</button>
      <p className="message">{message}</p>
    </div>
  );
}

export default Ref;
